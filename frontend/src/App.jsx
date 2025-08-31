import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Reduced loading time for better performance
    const timer = setTimeout(() => setIsLoading(false), 500);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  // Scroll to top when section changes
  useEffect(() => {
    // Multiple scroll targets to ensure it works on all devices
    const scrollTargets = [
      document.querySelector('.content-scroll-area'),
      document.querySelector('.main-content'),
      document.documentElement,
      document.body
    ];
    
    scrollTargets.forEach(target => {
      if (target) {
        if (isMobile) {
          // Use instant scroll on mobile for better performance
          target.scrollTop = 0;
        } else {
          // Use smooth scroll on desktop
          target.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }
    });
  }, [activeSection, isMobile]);

  // Optimized animation variants for faster content transitions
  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: isMobile ? 8 : 12,
      scale: 0.99
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.3, 
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.05
      } 
    },
    exit: { 
      opacity: 0, 
      y: isMobile ? -8 : -12,
      scale: 0.99,
      transition: { 
        duration: 0.2, 
        ease: [0.4, 0, 0.2, 1] 
      } 
    },
  };

  // Optimized stagger children animation
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  // Handle section change with optimized scrolling
  const handleSectionChange = useCallback((section) => {
    setActiveSection(section);
    
    // Multiple scroll targets to ensure it works on all devices
    const scrollTargets = [
      document.querySelector('.content-scroll-area'),
      document.querySelector('.main-content'),
      document.documentElement,
      document.body
    ];
    
    scrollTargets.forEach(target => {
      if (target) {
        if (isMobile) {
          // Use instant scroll on mobile for better performance
          target.scrollTop = 0;
        } else {
          // Use smooth scroll on desktop
          target.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }
    });
  }, [isMobile]);

  // Render content with optimized animations
  const renderContent = () => {
    let SectionComponent;
    let componentProps = {};
    
    switch (activeSection) {
      case 'about':
        SectionComponent = About;
        break;
      case 'experience':
        SectionComponent = Experience;
        break;
      case 'projects':
        SectionComponent = Projects;
        componentProps = { setActiveSection };
        break;
      case 'skills':
        SectionComponent = Skills;
        break;
      case 'contact':
        SectionComponent = Contact;
        break;
      default:
        SectionComponent = About;
    }
    
    return (
      <motion.div
        key={activeSection}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ height: '100%' }}
      >
        <motion.div variants={staggerContainer}>
          <SectionComponent {...componentProps} />
        </motion.div>
      </motion.div>
    );
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className="app loading-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="loading-content"
        >
          <div className="loading-spinner"></div>
          <h2>Loading Portfolio...</h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Optimized Background Video Layer */}
      <div className="video-background-wrapper">
        <video
          className="video-background"
          src="/vid.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
        <div className="video-overlay"></div>
      </div>
      
      {/* Main Content */}
      <div className="app-container">
        {/* Show sidebar only on About page OR on desktop */}
        {(activeSection === 'about' || !isMobile) && <Sidebar />}
        
        <main className="main-content">
          <motion.header 
            className="main-header"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h1 className="portfolio-title">PORTFOLIO</h1>
          </motion.header>
          
          {/* Scrollable content area */}
          <div className="content-scroll-area">
            {/* Optimized AnimatePresence for faster content switching */}
            <AnimatePresence mode="wait" initial={false}>
              {renderContent()}
            </AnimatePresence>
          </div>
        </main>
        
        {/* Navigation - positioned differently on mobile vs desktop */}
        <Navigation 
          activeSection={activeSection} 
          setActiveSection={handleSectionChange}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
}

export default App;
