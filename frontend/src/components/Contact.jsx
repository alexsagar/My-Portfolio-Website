import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs.js';
import '../styles/Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'alexsagar07@gmail.com',
      link: 'mailto:alexsagar07@gmail.com',
      color: '#4A90E2'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+977 9866202254',
      link: 'tel:+9779866202254',
      color: '#2ECC71'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Nepal',
      link: null,
      color: '#E74C3C'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Map form field names to state properties
    let stateKey = name;
    if (name === 'user_name') stateKey = 'name';
    if (name === 'user_email') stateKey = 'email';
    
    setFormData(prev => ({
      ...prev,
      [stateKey]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Check if EmailJS is configured
    if (emailjsConfig.serviceId === 'YOUR_SERVICE_ID' || 
        emailjsConfig.templateId === 'YOUR_TEMPLATE_ID' || 
        emailjsConfig.publicKey === 'YOUR_PUBLIC_KEY') {
      setSubmitStatus('not-configured');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );
      
      if (result.status === 200) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="contact-container">
      <motion.div 
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>Get In Touch</motion.h2>
        <motion.p variants={itemVariants} className="contact-intro">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
        </motion.p>
        
        <div className="contact-layout">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="contact-info-section">
            <h3>Contact Information</h3>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-info-item"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="contact-icon" style={{ '--icon-color': info.color }}>
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="contact-availability">
              <h4>Availability</h4>
              <p>I'm currently available for freelance work and full-time opportunities. Feel free to reach out!</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="contact-form-section">
            <h3>Send Me a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell me more about your project or inquiry..."
                />
              </div>
              
              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {/* Submit Status */}
            {submitStatus === 'success' && (
              <motion.div
                className="submit-status success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <CheckCircle size={20} />
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                className="submit-status error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <AlertCircle size={20} />
                Failed to send message. Please try again or contact me directly.
              </motion.div>
            )}
            
            {submitStatus === 'not-configured' && (
              <motion.div
                className="submit-status not-configured"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <AlertCircle size={20} />
                EmailJS not configured. Please check the setup guide in EMAILJS_SETUP.md
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;