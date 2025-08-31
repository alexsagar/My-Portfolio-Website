import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Download, ExternalLink, Facebook, Instagram, Github } from 'lucide-react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/imnottsagar',
      icon: <Facebook size={20} />
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/unsagarized/',
      icon: <Instagram size={20} />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/alexsagar',
      icon: <Github size={20} />
    }
  ];

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      value: '+977 9866202254',
      link: 'tel:+9779861234567'
    },
    {
      icon: <Mail size={20} />,
      value: 'alexsagar07@gmail.com',
      link: 'mailto:alexsagar07@gmail.com'
    },
    {
      icon: <MapPin size={20} />,
      value: 'Nepal',
      link: null
    },
    {
      icon: <Calendar size={20} />,
      value: '15 March, 2003',
      link: null
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleContactClick = (link) => {
    if (link) {
      window.open(link, '_self');
    }
  };

  return (
    <motion.aside 
      className="sidebar"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Profile Section */}
      <section className="profile-section">
        <motion.div 
          className="profile-image"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src="/profile.jpg" 
            alt="Sagar Nepali" 
            className="avatar-img"
          />
        </motion.div>
        
        <motion.h2 
          className="profile-name"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sagar Nepali
        </motion.h2>
        
        <motion.p 
          className="profile-title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          MERN + STACK DEV.
        </motion.p>
      </section>

      {/* Social Links */}
      <motion.section 
        className="social-links"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="social-icons">
          {socialLinks.map((social, index) => (
            <motion.button
              key={social.name}
              className="social-link"
              onClick={() => handleSocialClick(social.url)}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label={`Visit ${social.name}`}
            >
              <span className="social-icon">{social.icon}</span>
              <ExternalLink size={16} className="external-icon" />
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Contact Information */}
      <motion.section 
        className="contact-info"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="contact-items">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={`${contact.value}-${index}`}
              className={`contact-item ${contact.link ? 'clickable' : ''}`}
              onClick={() => handleContactClick(contact.link)}
              whileHover={contact.link ? { scale: 1.02, y: -1 } : {}}
              whileTap={contact.link ? { scale: 0.98 } : {}}
              transition={{ duration: 0.2 }}
              style={{ cursor: contact.link ? 'pointer' : 'default' }}
            >
              <div className="contact-icon">
                {contact.icon}
              </div>
              <div className="contact-details">
                {contact.link ? (
                  <a href={contact.link} className="contact-link">
                    {contact.value}
                  </a>
                ) : (
                  <span className="contact-value">{contact.value}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Resume Download */}
      <motion.section 
        className="resume-section"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.button
          className="resume-btn"
          onClick={() => window.open('/resume.pdf', '_blank')}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Download size={16} />
          Download Resume
        </motion.button>
      </motion.section>

      {/* Additional Info Section */}
      <motion.section 
        className="additional-info"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <p className="additional-info-text">
          Available for freelance projects and full-time opportunities
        </p>
      </motion.section>
    </motion.aside>
  );
};

export default Sidebar;
