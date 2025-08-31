#!/bin/bash

# ========================================
# DEPLOYMENT SCRIPT FOR SAGAR PORTFOLIO
# ========================================

set -e  # Exit on any error

# Configuration
PROJECT_NAME="sagar-portfolio"
DOMAIN="yourdomain.com"
VPS_USER="your-username"
VPS_HOST="your-vps-ip"
VPS_PATH="/var/www/$DOMAIN"
BACKUP_PATH="/var/www/backups"
BUILD_DIR="dist"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✓ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

error() {
    echo -e "${RED}✗ $1${NC}"
}

# Check if required tools are installed
check_dependencies() {
    log "Checking dependencies..."
    
    if ! command -v npm &> /dev/null; then
        error "npm is not installed"
        exit 1
    fi
    
    if ! command -v rsync &> /dev/null; then
        error "rsync is not installed"
        exit 1
    fi
    
    if ! command -v ssh &> /dev/null; then
        error "ssh is not installed"
        exit 1
    fi
    
    success "All dependencies are installed"
}

# Build the project
build_project() {
    log "Building project..."
    
    # Clean previous build
    if [ -d "$BUILD_DIR" ]; then
        rm -rf "$BUILD_DIR"
        log "Cleaned previous build directory"
    fi
    
    # Install dependencies
    log "Installing dependencies..."
    npm ci --production=false
    
    # Build project
    log "Building project..."
    npm run build
    
    if [ ! -d "$BUILD_DIR" ]; then
        error "Build failed - dist directory not found"
        exit 1
    fi
    
    success "Project built successfully"
}

# Create backup on VPS
create_backup() {
    log "Creating backup on VPS..."
    
    ssh "$VPS_USER@$VPS_HOST" "mkdir -p $BACKUP_PATH"
    
    if ssh "$VPS_USER@$VPS_HOST" "[ -d $VPS_PATH ]"; then
        BACKUP_NAME="$BACKUP_PATH/${PROJECT_NAME}-$(date +%Y%m%d-%H%M%S).tar.gz"
        ssh "$VPS_USER@$VPS_HOST" "tar -czf $BACKUP_NAME -C $VPS_PATH ."
        success "Backup created: $BACKUP_NAME"
    else
        warning "No existing deployment found, skipping backup"
    fi
}

# Deploy to VPS
deploy_to_vps() {
    log "Deploying to VPS..."
    
    # Create deployment directory
    ssh "$VPS_USER@$VPS_HOST" "mkdir -p $VPS_PATH"
    
    # Sync files to VPS
    log "Syncing files to VPS..."
    rsync -avz --delete \
        --exclude 'node_modules' \
        --exclude '.git' \
        --exclude '.env*' \
        --exclude '*.log' \
        --exclude 'coverage' \
        --exclude '.nyc_output' \
        "$BUILD_DIR/" "$VPS_USER@$VPS_HOST:$VPS_PATH/"
    
    # Set proper permissions
    log "Setting permissions..."
    ssh "$VPS_USER@$VPS_HOST" "chown -R www-data:www-data $VPS_PATH"
    ssh "$VPS_USER@$VPS_HOST" "chmod -R 755 $VPS_PATH"
    ssh "$VPS_USER@$VPS_HOST" "chmod 644 $VPS_PATH/.htaccess"
    
    success "Deployment completed successfully"
}

# Test deployment
test_deployment() {
    log "Testing deployment..."
    
    # Test if the site is accessible
    if curl -s -f "https://$DOMAIN" > /dev/null; then
        success "Site is accessible at https://$DOMAIN"
    else
        warning "Site might not be accessible yet (check nginx configuration)"
    fi
    
    # Test security headers
    log "Testing security headers..."
    SECURITY_HEADERS=$(curl -s -I "https://$DOMAIN" | grep -E "(X-Frame-Options|X-Content-Type-Options|X-XSS-Protection|Strict-Transport-Security)")
    
    if echo "$SECURITY_HEADERS" | grep -q "X-Frame-Options: DENY"; then
        success "X-Frame-Options header is set"
    else
        warning "X-Frame-Options header is missing"
    fi
    
    if echo "$SECURITY_HEADERS" | grep -q "X-Content-Type-Options: nosniff"; then
        success "X-Content-Type-Options header is set"
    else
        warning "X-Content-Type-Options header is missing"
    fi
}

# Update sitemap dates
update_sitemap() {
    log "Updating sitemap with current date..."
    
    CURRENT_DATE=$(date +%Y-%m-%d)
    sed -i "s/<lastmod>.*<\/lastmod>/<lastmod>$CURRENT_DATE<\/lastmod>/g" "$BUILD_DIR/sitemap.xml"
    
    success "Sitemap updated with current date: $CURRENT_DATE"
}

# Main deployment process
main() {
    log "Starting deployment process for $PROJECT_NAME..."
    
    # Check dependencies
    check_dependencies
    
    # Build project
    build_project
    
    # Update sitemap
    update_sitemap
    
    # Create backup on VPS
    create_backup
    
    # Deploy to VPS
    deploy_to_vps
    
    # Test deployment
    test_deployment
    
    success "Deployment completed successfully!"
    log "Your portfolio is now live at https://$DOMAIN"
}

# Show help
show_help() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  -h, --help     Show this help message"
    echo "  -b, --build    Only build the project (don't deploy)"
    echo "  -t, --test     Only test the current deployment"
    echo "  -f, --force    Force deployment without confirmation"
    echo ""
    echo "Examples:"
    echo "  $0              # Full deployment"
    echo "  $0 --build      # Only build"
    echo "  $0 --test       # Only test"
}

# Parse command line arguments
case "$1" in
    -h|--help)
        show_help
        exit 0
        ;;
    -b|--build)
        log "Build-only mode selected"
        check_dependencies
        build_project
        update_sitemap
        success "Build completed successfully!"
        exit 0
        ;;
    -t|--test)
        log "Test-only mode selected"
        test_deployment
        exit 0
        ;;
    -f|--force)
        log "Force deployment mode selected"
        main
        ;;
    "")
        # Interactive mode
        log "Starting interactive deployment..."
        read -p "Are you sure you want to deploy to $DOMAIN? (y/N): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            main
        else
            log "Deployment cancelled"
            exit 0
        fi
        ;;
    *)
        error "Unknown option: $1"
        show_help
        exit 1
        ;;
esac
