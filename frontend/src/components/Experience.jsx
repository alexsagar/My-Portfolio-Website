import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Award } from 'lucide-react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Website Developer (MERN Stack)',
      company: 'HypeAD Marketing Pvt. Ltd.',
      location: 'Kathmandu District, Nepal',
      period: 'Apr 2025 – Present (5 mos)',
      type: 'Full-time | On-site',
      description: 'Developed responsive, user-friendly web interfaces and dashboards. Implemented RESTful APIs and managed database operations with MongoDB. Collaborated with designers, marketers, and project managers to deliver customized digital solutions. Optimized website performance, scalability, and security for enhanced user experience. Maintained clean, modular, and reusable code to support long-term growth.',
      skills: ['MERN Stack', 'React.js', 'Node.js', 'MongoDB', 'RESTful APIs', 'Responsive Design', 'Performance Optimization', 'Security', 'Code Quality'],
      achievements: ['Developed responsive web interfaces and dashboards', 'Implemented RESTful APIs with MongoDB', 'Optimized website performance and security', 'Maintained clean, modular, and reusable code']
    },
    {
      title: 'Digital Marketing Manager',
      company: 'HypeAD Marketing Pvt. Ltd.',
      location: 'Kathmandu District, Nepal',
      period: 'Jan 2023 – Apr 2025 (2 yrs 4 mos)',
      type: 'Full-time | On-site',
      description: 'Led performance marketing campaigns across Meta, Google, and TikTok. Increased brand engagement and conversions for multiple clients. Developed marketing strategies and presented campaign metrics to management. Created visuals, ad copies, and managed ad spending.',
      skills: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Performance Marketing', 'Campaign Strategy', 'Brand Engagement', 'Conversion Optimization', 'Campaign Analytics', 'Creative Development'],
      achievements: ['Led performance marketing campaigns across multiple platforms', 'Increased brand engagement and conversions for multiple clients', 'Developed and presented marketing strategies to management', 'Created visuals, ad copies, and managed ad spending']
    },
    {
      title: 'Assistant IT Manager',
      company: 'Babylon National School',
      location: 'Kathmandu District, Nepal',
      period: 'Feb 2022 – Dec 2022 (11 mos)',
      type: 'Full-time | On-site',
      description: 'Provided technical support for computer systems, projectors, and smart classrooms. Installed, configured, and maintained software and hardware for staff and faculty. Troubleshot network issues and ensured consistent internet connectivity. Assisted teachers and admin staff with IT needs. Maintained digital records and managed the school\'s internal database & student information system.',
      skills: ['Technical Support', 'System Administration', 'Hardware Maintenance', 'Network Troubleshooting', 'Software Installation', 'Database Management', 'IT Infrastructure', 'User Support'],
      achievements: ['Provided comprehensive technical support for computer systems and smart classrooms', 'Maintained network connectivity and IT infrastructure', 'Managed school\'s internal database and student information system', 'Supported staff and faculty with IT needs']
    },
    {
      title: 'Social Media Marketing Manager',
      company: 'Streamstop',
      location: 'Kathmandu District, Nepal',
      period: 'Aug 2021 – Dec 2021 (5 mos)',
      type: 'Full-time | Remote',
      description: 'Managed company\'s online presence and content calendar. Updated website and social media platforms with fresh content. Monitored ongoing campaigns and analyzed performance. Prepared client presentations for marketing strategies.',
      skills: ['Social Media Management', 'Content Strategy', 'Campaign Monitoring', 'Performance Analysis', 'Client Presentations', 'Digital Marketing', 'Content Creation'],
      achievements: ['Managed company\'s online presence and content calendar', 'Updated website and social media platforms with fresh content', 'Monitored campaigns and analyzed performance', 'Prepared client presentations for marketing strategies']
    },
    {
      title: 'Customer Support Representative',
      company: 'Streamstop',
      location: 'Kathmandu District, Nepal',
      period: 'Mar 2021 – Aug 2021 (6 mos)',
      type: 'Full-time | Remote',
      description: 'Delivered empathetic and professional customer support. Resolved customer issues promptly via chat, email, and phone. Supervised and guided junior support staff. Ensured smooth communication flow with clients.',
      skills: ['Customer Support', 'Issue Resolution', 'Communication', 'Team Leadership', 'Client Relations', 'Problem Solving', 'Multi-channel Support'],
      achievements: ['Delivered empathetic and professional customer support', 'Resolved customer issues promptly via multiple channels', 'Supervised and guided junior support staff', 'Ensured smooth communication flow with clients']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'Yeti International College',
      location: 'Nepal',
      period: '2021 - Present',
      description: 'Currently pursuing degree with focus on computer applications, web development, and digital technologies.',
      achievements: ['Maintaining strong academic performance', 'Participating in tech workshops and events', 'Applying practical knowledge from work experience']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <div className="experience-container">
      <motion.div 
        className="experience-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>Experience & Education</motion.h2>
        
        {/* Education Section - Shown First in Card Format */}
        <motion.section variants={itemVariants} className="education-section">
          <h3>Education</h3>
          <div className="timeline">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="timeline-item education-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="timeline-marker education-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>{edu.degree}</h4>
                    <div className="timeline-meta">
                      <span className="institution">
                        <Building size={16} />
                        {edu.institution}
                      </span>
                      <span className="location">
                        <MapPin size={16} />
                        {edu.location}
                      </span>
                      <span className="period">
                        <Calendar size={16} />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                  <p className="description">{edu.description}</p>
                  
                  <div className="achievements">
                    <h5>
                      <Award size={16} />
                      Highlights:
                    </h5>
                    <ul>
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Work Experience Section - Shown Second in Timeline Format */}
        <motion.section variants={itemVariants} className="experience-section">
          <h3>
            <Building size={24} />
            Work Experience
          </h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4>{exp.title}</h4>
                    <div className="timeline-meta">
                      <span className="company">
                        <Building size={16} />
                        {exp.company}
                      </span>
                      <span className="location">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                      <span className="period">
                        <Calendar size={16} />
                        {exp.period}
                      </span>
                      <span className="employment-type">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <p className="description">{exp.description}</p>
                  
                  <div className="skills">
                    <h5>Key Skills:</h5>
                    <div className="skill-tags">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="achievements">
                    <h5>
                      <Award size={16} />
                      Key Achievements:
                    </h5>
                    <ul>
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Experience;
