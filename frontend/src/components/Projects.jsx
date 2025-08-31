import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Smartphone, 
  Palette, 
  ExternalLink, 
  Github,
  Award
} from 'lucide-react';
import '../styles/Projects.css';

const Projects = ({ setActiveSection }) => {
  const projects = [
    {
      title: "CinemaGhar - Movie Streaming Platform",
      description: "A modern, responsive movie streaming web application built with React, Node.js, and MongoDB. Features automatic content ingestion, quality management, and a professional admin dashboard. Includes legal streaming pipeline, automatic quality upgrades, multi-format support, and TMDB integration.",
      image: "https://res.cloudinary.com/dtuqbqgz7/image/upload/v1756630452/Screenshot_2025-08-31_143843_ybjyax.png",
      technologies: ["React 19", "Vite", "Tailwind CSS", "shadcn/ui", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "TMDB API", "Agenda", "Axios"],
      category: "Full-Stack",
      liveUrl: null,
      githubUrl: "https://github.com/alexsagar/CinemaGhar",
      featured: true
    },
    {
      title: "GamePasal - Gaming E-commerce",
      description: "A comprehensive gaming e-commerce platform designed for gamers to purchase games, accessories, and gaming merchandise. Features user authentication, product catalog, shopping cart, and secure payment processing.",
      image: "https://res.cloudinary.com/dtuqbqgz7/image/upload/v1756627868/gamepasal_gfshjs.png",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Bcrypt", "Mongoose", "RESTful APIs"],
      category: "E-commerce",
      liveUrl: null,
      githubUrl: "https://github.com/alexsagar/GamePasal",
      featured: true
    },
    {
      title: "Tea-N-Tea Management System",
      description: "A complete tea shop management system with inventory tracking, sales management, customer database, and reporting features. Designed to streamline operations for tea businesses with user-friendly interface.",
      image: "https://res.cloudinary.com/dtuqbqgz7/image/upload/v1756627867/teantea_d4tobk.png",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Chart.js", "Responsive Design", "Admin Dashboard"],
      category: "Management Systems",
      liveUrl: null,
      githubUrl: "https://github.com/alexsagar/Tea-N-Tea-Management-System",
      featured: true
    },
    {
      title: "Fullstack Voting App",
      description: "A real-time voting application with live results, user authentication, and secure voting mechanisms. Features real-time updates, result visualization, and admin controls for managing polls and elections.",
      image: "https://res.cloudinary.com/dtuqbqgz7/image/upload/v1756630691/Screenshot_2025-08-31_144301_i9fngb.png",
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "Express.js", "Real-time Updates", "Chart.js", "JWT"],
      category: "Full-Stack",
      liveUrl: null,
      githubUrl: "https://github.com/alexsagar/fullstack-voting-app",
      featured: false
    },
    {
      title: "Nike E-commerce Website",
      description: "A modern, responsive Nike e-commerce website clone with product catalog, shopping cart, user authentication, and payment integration. Features sleek design, mobile-first approach, and smooth user experience.",
      image: "https://res.cloudinary.com/dtuqbqgz7/image/upload/v1756630778/Screenshot_2025-08-31_144412_mqolqt.png",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Stripe", "Responsive Design", "Modern UI/UX"],
      category: "E-commerce",
      liveUrl: null,
      githubUrl: "https://github.com/alexsagar/Nike-Ecommerce-Website",
      featured: false
    },
    {
      title: "Coming Soon...",
      description: "More exciting projects are in development. Stay tuned for new applications, tools, and innovative solutions that showcase cutting-edge technologies and creative problem-solving.",
      image: "https://res.cloudinary.com/dtuqbqgz7/image/upload/v1756630991/black-white-modern-coming-soon-instagram-post-1_1225739-61_dgkuv6.avif",
      technologies: ["React.js", "Node.js", "Next.js", "TypeScript", "AI/ML", "Cloud Services"],
      category: "Full-Stack",
      liveUrl: null,
      githubUrl: null,
      featured: false,
      comingSoon: true
    }
  ];

  const categories = ["All", "Full-Stack", "Frontend", "Backend", "UI/UX", "E-commerce", "Management Systems"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch(category) {
      case "Full-Stack":
        return <Code size={20} />;
      case "Frontend":
        return <Globe size={20} />;
      case "Backend":
        return <Code size={20} />;
      case "UI/UX":
        return <Smartphone size={20} />;
      case "E-commerce":
        return <Globe size={20} />;
      case "Management Systems":
        return <Code size={20} />;
      default:
        return <Code size={20} />;
    }
  };

  return (
    <div className="projects-container">
      <motion.div 
        className="projects-content"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1, 
            transition: { staggerChildren: 0.1 } 
          }
        }}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } 
            }
          }}
        >
          My Projects
        </motion.h2>
        
        <motion.p 
          className="projects-intro"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } 
            }
          }}
        >
          Here are some of the projects I've built, showcasing my expertise in MERN stack development, e-commerce solutions, management systems, and real-time applications. Each project demonstrates my ability to create scalable, user-friendly solutions.
        </motion.p>

        <motion.div 
          className="category-filter"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } 
            }
          }}
        >
          {categories.map(category => (
            <motion.button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {getCategoryIcon(category)}
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { staggerChildren: 0.1 } 
            }
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''} ${project.comingSoon ? 'coming-soon' : ''}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } 
                }
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => {
                if (project.githubUrl && !project.comingSoon) {
                  window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                }
              }}
              style={{ cursor: project.comingSoon ? 'default' : 'pointer' }}
            >
              {project.featured && (
                <div className="featured-badge">
                  <Award size={16} />
                  Featured
                </div>
              )}
              
              {project.comingSoon && (
                <div className="coming-soon-badge">
                  Coming Soon
                </div>
              )}

              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                />
                {!project.comingSoon && (
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link live"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link github"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={20} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="projects-cta"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } 
            }
          }}
        >
          <h3>Interested in working together?</h3>
          <p>Let's discuss your project and see how I can help bring your ideas to life.</p>
          <motion.button
            className="cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={() => setActiveSection('contact')}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;