// Navigation.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, FolderOpen, Code, MessageCircle } from 'lucide-react';
import '../styles/Navigation.css';

const Navigation = ({ activeSection, setActiveSection, isMobile }) => {
  const navItems = [
    {
      id: 'about',
      label: 'ABOUT',
      icon: User,
      color: '#60a5fa'
    },
    {
      id: 'experience',
      label: 'EXPERIENCE',
      icon: Briefcase,
      color: '#60a5fa'
    },
    {
      id: 'projects',
      label: 'PROJECTS',
      icon: FolderOpen,
      color: '#60a5fa'
    },
    {
      id: 'skills',
      label: 'SKILLS',
      icon: Code,
      color: '#60a5fa'
    },
    {
      id: 'contact',
      label: 'CONTACT',
      icon: MessageCircle,
      color: '#60a5fa'
    }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <nav className="navigation">
      {navItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = activeSection === item.id;
        
        return (
          <motion.button
            key={item.id}
            className={`nav-item ${isActive ? 'active' : ''}`}
            onClick={() => handleNavClick(item.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <IconComponent 
              size={20} 
              color={isActive ? item.color : 'currentColor'} 
            />
            <span>{item.label}</span>
          </motion.button>
        );
      })}
    </nav>
  );
};

export default Navigation;
