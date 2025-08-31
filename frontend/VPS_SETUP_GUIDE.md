# 🚀 VPS Deployment Guide for Sagar Portfolio

This guide will walk you through setting up your VPS to host your React portfolio website with Nginx, SSL, and all security best practices.

## 📋 Prerequisites

- A VPS with Ubuntu 20.04+ or CentOS 8+
- Root or sudo access
- A domain name pointing to your VPS IP
- Basic knowledge of Linux commands

## 🏗️ Step 1: Initial Server Setup

### 1.1 Connect to your VPS
```bash
ssh root@your-vps-ip
```

### 1.2 Update system packages
```bash
# Ubuntu/Debian
apt update && apt upgrade -y

# CentOS/RHEL
dnf update -y
```

### 1.3 Create a non-root user
```bash
adduser your-username
usermod -aG sudo your-username
```

### 1.4 Set up SSH key authentication
```bash
# On your local machine, generate SSH key if you haven't
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

# Copy your public key to the server
ssh-copy-id your-username@your-vps-ip

# Test the connection
ssh your-username@your-vps-ip
```

## 🌐 Step 2: Install Nginx

### 2.1 Install Nginx
```bash
# Ubuntu/Debian
sudo apt install nginx -y

# CentOS/RHEL
sudo dnf install nginx -y
```

### 2.2 Start and enable Nginx
```bash
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx
```

### 2.3 Configure firewall
```bash
# Ubuntu/Debian (UFW)
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable

# CentOS/RHEL (firewalld)
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --reload
```

## 🔒 Step 3: Install SSL Certificate with Let's Encrypt

### 3.1 Install Certbot
```bash
# Ubuntu/Debian
sudo apt install certbot python3-certbot-nginx -y

# CentOS/RHEL
sudo dnf install certbot python3-certbot-nginx -y
```

### 3.2 Obtain SSL certificate
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### 3.3 Test automatic renewal
```bash
sudo certbot renew --dry-run
```

## 📁 Step 4: Set Up Website Directory

### 4.1 Create website directory
```bash
sudo mkdir -p /var/www/yourdomain.com
sudo chown -R your-username:www-data /var/www/yourdomain.com
sudo chmod -R 755 /var/www/yourdomain.com
```

### 4.2 Create public directory
```bash
sudo mkdir -p /var/www/yourdomain.com/public
sudo chown -R your-username:www-data /var/www/yourdomain.com/public
```

## ⚙️ Step 5: Configure Nginx

### 5.1 Copy the provided Nginx configuration
```bash
sudo cp nginx.conf /etc/nginx/nginx.conf
```

### 5.2 Update the configuration with your domain
```bash
sudo nano /etc/nginx/nginx.conf
```

Replace all instances of `yourdomain.com` with your actual domain.

### 5.3 Test Nginx configuration
```bash
sudo nginx -t
```

### 5.4 Reload Nginx
```bash
sudo systemctl reload nginx
```

## 🚀 Step 6: Deploy Your Website

### 6.1 On your local machine, update the deployment script
```bash
cd frontend
nano deploy.sh
```

Update these variables:
- `DOMAIN="yourdomain.com"`
- `VPS_USER="your-username"`
- `VPS_HOST="your-vps-ip"`

### 6.2 Make the script executable
```bash
chmod +x deploy.sh
```

### 6.3 Deploy your website
```bash
./deploy.sh
```

## 🔧 Step 7: Post-Deployment Configuration

### 7.1 Set up automatic backups
```bash
# Create backup script
sudo nano /usr/local/bin/backup-portfolio.sh
```

Add this content:
```bash
#!/bin/bash
BACKUP_DIR="/var/www/backups"
WEBSITE_DIR="/var/www/yourdomain.com"
DATE=$(date +%Y%m%d-%H%M%S)

mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/portfolio-$DATE.tar.gz -C $WEBSITE_DIR .
find $BACKUP_DIR -name "portfolio-*.tar.gz" -mtime +7 -delete
```

Make it executable:
```bash
sudo chmod +x /usr/local/bin/backup-portfolio.sh
```

### 7.2 Set up cron job for daily backups
```bash
sudo crontab -e
```

Add this line:
```
0 2 * * * /usr/local/bin/backup-portfolio.sh
```

### 7.3 Set up log rotation
```bash
sudo nano /etc/logrotate.d/portfolio
```

Add this content:
```
/var/log/nginx/yourdomain.com.*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 www-data www-data
    postrotate
        systemctl reload nginx
    endscript
}
```

## 📊 Step 8: Monitoring and Maintenance

### 8.1 Install monitoring tools
```bash
# Install htop for system monitoring
sudo apt install htop -y

# Install fail2ban for security
sudo apt install fail2ban -y
```

### 8.2 Configure fail2ban
```bash
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

### 8.3 Set up log monitoring
```bash
# View real-time logs
sudo tail -f /var/log/nginx/yourdomain.com.access.log
sudo tail -f /var/log/nginx/yourdomain.com.error.log
```

## 🔍 Step 9: Testing and Validation

### 9.1 Test your website
- Visit `https://yourdomain.com`
- Check all sections load correctly
- Test contact form functionality
- Verify SSL certificate is working

### 9.2 Test security headers
```bash
curl -I https://yourdomain.com
```

You should see:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`

### 9.3 Test performance
- Use Google PageSpeed Insights
- Use GTmetrix
- Use Lighthouse in Chrome DevTools

## 🚨 Step 10: Security Hardening

### 10.1 Disable root login
```bash
sudo nano /etc/ssh/sshd_config
```

Set:
```
PermitRootLogin no
PasswordAuthentication no
```

Restart SSH:
```bash
sudo systemctl restart sshd
```

### 10.2 Set up automatic security updates
```bash
# Ubuntu/Debian
sudo apt install unattended-upgrades -y
sudo dpkg-reconfigure -plow unattended-upgrades

# CentOS/RHEL
sudo dnf install dnf-automatic -y
sudo systemctl enable --now dnf-automatic.timer
```

### 10.3 Configure firewall rules
```bash
# Ubuntu/Debian (UFW)
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow from your-ip-address to any port 22
sudo ufw allow 'Nginx Full'
sudo ufw enable

# CentOS/RHEL (firewalld)
sudo firewall-cmd --set-default-zone=drop
sudo firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address="your-ip-address" port port="22" protocol="tcp" accept'
sudo firewall-cmd --reload
```

## 📈 Step 11: Performance Optimization

### 11.1 Enable Nginx caching
```bash
sudo nano /etc/nginx/nginx.conf
```

Add to the http block:
```nginx
# FastCGI cache
fastcgi_cache_path /tmp/nginx_cache levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m use_temp_path=off;
fastcgi_cache_key "$request_method$request_uri";
fastcgi_cache_use_stale error timeout http_500 http_503;
fastcgi_cache_valid 200 60m;
```

### 11.2 Enable Brotli compression (optional)
```bash
# Ubuntu/Debian
sudo apt install libbrotli-dev -y
sudo apt install nginx-module-brotli -y

# CentOS/RHEL
sudo dnf install nginx-module-brotli -y
```

### 11.3 Configure Nginx for HTTP/2
```bash
sudo nano /etc/nginx/sites-available/yourdomain.com
```

Ensure you have:
```nginx
listen 443 ssl http2;
```

## 🔄 Step 12: Maintenance and Updates

### 12.1 Regular maintenance tasks
```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Clean up old packages
sudo apt autoremove -y

# Clean up old logs
sudo journalctl --vacuum-time=7d

# Check disk space
df -h

# Check memory usage
free -h
```

### 12.2 Monitor website performance
```bash
# Check Nginx status
sudo systemctl status nginx

# Check SSL certificate expiry
sudo certbot certificates

# Monitor error logs
sudo tail -f /var/log/nginx/error.log
```

## 🆘 Troubleshooting

### Common Issues and Solutions

#### 1. Nginx won't start
```bash
sudo nginx -t
sudo systemctl status nginx
sudo journalctl -u nginx
```

#### 2. SSL certificate issues
```bash
sudo certbot renew --dry-run
sudo certbot certificates
```

#### 3. Permission issues
```bash
sudo chown -R www-data:www-data /var/www/yourdomain.com
sudo chmod -R 755 /var/www/yourdomain.com
```

#### 4. Firewall issues
```bash
sudo ufw status
sudo firewall-cmd --list-all
```

## 📚 Additional Resources

- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [SSL Labs SSL Test](https://www.ssllabs.com/ssltest/)
- [Security Headers](https://securityheaders.com/)
- [Mozilla Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)

## 🎯 Next Steps

1. **Set up monitoring**: Consider using tools like Prometheus, Grafana, or UptimeRobot
2. **Implement CDN**: Use Cloudflare or AWS CloudFront for global content delivery
3. **Set up backups**: Configure automated backups to external storage
4. **Performance monitoring**: Set up real-time performance monitoring
5. **Security scanning**: Regular security audits and vulnerability scanning

---

## 🚀 Quick Deploy Commands

After initial setup, you can deploy updates with:

```bash
# Build and deploy
./deploy.sh

# Build only
./deploy.sh --build

# Test deployment
./deploy.sh --test

# Force deploy
./deploy.sh --force
```

Your portfolio is now ready for production! 🎉
