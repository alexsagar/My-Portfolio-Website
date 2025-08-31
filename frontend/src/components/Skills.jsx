import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={24} />,
      color: '#4A90E2',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'TypeScript', level: 75 },
        { name: 'Next.js', level: 70 },
        { name: 'Tailwind CSS', level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database size={24} />,
      color: '#3498DB',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'GraphQL', level: 65 }
      ]
    },
    {
      title: 'UI/UX Design',
      icon: <Palette size={24} />,
      color: '#9B59B6',
      skills: [
        { name: 'Figma', level: 80 },
        { name: 'Adobe XD', level: 75 },
        { name: 'User Research', level: 70 },
        { name: 'Prototyping', level: 80 },
        { name: 'Design Systems', level: 75 },
        { name: 'Accessibility', level: 70 }
      ]
    },
    {
      title: 'Digital Marketing',
      icon: <Globe size={24} />,
      color: '#E74C3C',
      skills: [
        { name: 'Meta Ads', level: 85 },
        { name: 'Google Ads', level: 80 },
        { name: 'TikTok Ads', level: 75 },
        { name: 'SEO', level: 70 },
        { name: 'Analytics', level: 80 },
        { name: 'Content Strategy', level: 75 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone size={24} />,
      color: '#2ECC71',
      skills: [
        { name: 'React Native', level: 70 },
        { name: 'Progressive Web Apps', level: 80 },
        { name: 'Mobile-First Design', level: 85 },
        { name: 'App Store Optimization', level: 65 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Zap size={24} />,
      color: '#F39C12',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Docker', level: 65 },
        { name: 'AWS', level: 60 },
        { name: 'CI/CD', level: 70 },
        { name: 'Jira', level: 75 },
        { name: 'Postman', level: 80 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="skills-container">
      <motion.div 
        className="skills-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={categoryVariants}>Skills & Expertise</motion.h2>
        <motion.p variants={categoryVariants} className="skills-intro">
          A comprehensive overview of my technical skills and professional expertise across various domains.
        </motion.p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={categoryVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="category-header" style={{ '--category-color': category.color }}>
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    variants={skillVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: category.color
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={categoryVariants} className="skills-summary">
          <h3>Professional Summary</h3>
          <p>
            With expertise spanning full-stack development, UI/UX design, and digital marketing, 
            I bring a holistic approach to creating digital solutions. My skills are continuously 
            evolving as I stay updated with the latest technologies and industry best practices.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;