# 🚀 Sagar Nepali - Portfolio Website

A modern, responsive portfolio website built with React.js and Vite, showcasing professional projects, skills, and experience. Features smooth animations, mobile-first design, and optimal performance for both development and production environments.

![Portfolio Preview]([https://res.cloudinary.com/dtuqbqgz7/image/upload/v1756630452/Screenshot_2025-08-31_143843_ybjyax.png](https://res.cloudinary.com/dtuqbqgz7/image/upload/v1756641230/Screenshot_2025-08-31_173757_qqwzvc.png))

## ✨ Features

### 🎨 **Modern Design & UX**
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Dark/Light Theme**: Elegant color scheme with consistent visual hierarchy
- **Interactive Elements**: Hover effects, smooth scrolling, and engaging user interactions

### 📱 **Responsive Layout**
- **Mobile-First**: Optimized for all screen sizes and devices
- **Flexible Grid System**: Adaptive layouts that work on any device
- **Touch-Friendly**: Optimized for mobile and tablet interactions
- **Performance Optimized**: Fast loading times across all devices

### 🛠️ **Technical Features**
- **React 19**: Latest React features and performance optimizations
- **Vite Build Tool**: Lightning-fast development and optimized production builds
- **CSS Modules**: Scoped styling with modern CSS features
- **Lazy Loading**: Optimized image and component loading
- **SEO Optimized**: Meta tags, structured data, and search engine friendly

### 📧 **Contact Integration**
- **EmailJS Integration**: Direct email sending from contact form
- **Form Validation**: Client-side validation with user feedback
- **Real-time Status**: Live updates on form submission status
- **Professional Templates**: Customizable email templates

## 🏗️ **Project Structure**

```
frontend/
├── public/                 # Static assets
│   ├── favicon.ico        # Site favicon
│   ├── robots.txt         # Search engine directives
│   ├── sitemap.xml        # Site structure for SEO
│   └── error.html         # Custom error page
├── src/
│   ├── components/        # React components
│   │   ├── About.jsx      # About section
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Home.jsx       # Landing page
│   │   ├── Navigation.jsx # Navigation menu
│   │   ├── Projects.jsx   # Projects showcase
│   │   ├── Sidebar.jsx    # Sidebar information
│   │   └── Skills.jsx     # Skills display
│   ├── styles/            # CSS stylesheets
│   │   ├── App.css        # Main application styles
│   │   ├── About.css      # About section styles
│   │   ├── Contact.css    # Contact form styles
│   │   ├── Home.css       # Landing page styles
│   │   ├── Navigation.css # Navigation styles
│   │   ├── Projects.css   # Projects section styles
│   │   ├── Sidebar.css    # Sidebar styles
│   │   └── Skills.css     # Skills section styles
│   ├── config/            # Configuration files
│   │   └── emailjs.js     # EmailJS credentials
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🛠️ **Technologies Used**

### **Frontend Framework**
- **React.js 19**: Modern React with latest features
- **Vite**: Next-generation build tool for fast development
- **Framer Motion**: Smooth animations and transitions

### **Styling & UI**
- **CSS Modules**: Scoped and maintainable styles
- **Responsive Design**: Mobile-first approach
- **Modern CSS**: Flexbox, Grid, and CSS custom properties

### **Development Tools**
- **ESLint**: Code quality and consistency
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: Cross-browser compatibility

### **External Services**
- **EmailJS**: Contact form email functionality
- **Cloudinary**: Image hosting and optimization
- **GitHub**: Project repositories and version control

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn package manager
- Modern web browser

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/alexsagar/portfolio-website.git
   cd portfolio-website/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS (Optional)**
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Update `src/config/emailjs.js` with your credentials
   - See `EMAILJS_SETUP.md` for detailed instructions

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:3000`
   - Your portfolio should now be running locally!

## 📱 **Available Scripts**

### **Development**
```bash
npm run dev          # Start development server
npm run preview      # Preview production build
npm run build        # Build for production
```

### **Code Quality**
```bash
npm run lint         # Check code quality
npm run lint:fix     # Fix linting issues
npm run type-check   # Type checking (if using TypeScript)
```

### **Build & Deploy**
```bash
npm run build:prod   # Production build with optimizations
npm run analyze      # Analyze bundle size
npm run clean        # Clean build artifacts
```

## 🌐 **Deployment**

### **VPS Deployment**
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to VPS**
   - Use the provided `deploy.sh` script
   - Or manually upload `dist/` folder to your server

3. **Configure web server**
   - Use provided `nginx.conf` for Nginx
   - Or `.htaccess` for Apache

### **Static Hosting**
- **Netlify**: Drag and drop `dist/` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use `gh-pages` branch

## 🔧 **Configuration**

### **EmailJS Setup**
1. Create EmailJS account
2. Set up email service
3. Create email template
4. Update `src/config/emailjs.js`

### **Customization**
- **Colors**: Update CSS custom properties in `src/styles/`
- **Content**: Modify component files in `src/components/`
- **Images**: Replace images in `public/` folder
- **Projects**: Update project data in `Projects.jsx`

## 📊 **Performance Features**

### **Optimization**
- **Code Splitting**: Automatic chunk splitting for better loading
- **Lazy Loading**: Images and components load on demand
- **Minification**: CSS and JavaScript minification for production
- **Compression**: Gzip/Brotli compression support

### **SEO & Accessibility**
- **Meta Tags**: Comprehensive SEO meta information
- **Structured Data**: JSON-LD schema markup
- **Semantic HTML**: Proper HTML structure for accessibility
- **Alt Text**: Descriptive image alt attributes

## 🎯 **Key Projects Showcased**

### **Featured Projects**
1. **CinemaGhar** - Movie Streaming Platform
   - React 19, Node.js, MongoDB, TMDB API
   - [View on GitHub](https://github.com/alexsagar/CinemaGhar)

2. **GamePasal** - Gaming E-commerce
   - React.js, Node.js, MongoDB, JWT
   - [View on GitHub](https://github.com/alexsagar/GamePasal)

3. **Tea-N-Tea Management System**
   - React.js, Node.js, MongoDB, Chart.js
   - [View on GitHub](https://github.com/alexsagar/Tea-N-Tea-Management-System)

### **Other Projects**
- **Fullstack Voting App** - Real-time voting with Socket.io
- **Nike E-commerce Website** - Modern e-commerce clone
- **Coming Soon** - More projects in development

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 **Contact**

- **Portfolio**: [sagar-nepali.com.np](https://sagar-nepali.com.np)
- **GitHub**: [@alexsagar](https://github.com/alexsagar)
- **Email**: [Contact through portfolio form](https://sagar-nepali.com.np/#contact)

## 🙏 **Acknowledgments**

- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons
- **Vite** for fast development experience
- **EmailJS** for contact form functionality
- **Cloudinary** for image hosting

---

**Built with ❤️ by Sagar Nepali**

*Last updated: August 2025*
