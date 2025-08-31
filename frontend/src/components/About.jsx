import React, { useMemo, useCallback } from 'react';
import '../styles/About.css';

const About = () => {
  const handleImageError = useCallback((event, fallbackImage) => {
    event.target.src = fallbackImage;
  }, []);

  const services = useMemo(() => [
    {
      title: 'Web Front-End Development',
      description: 'With a robust proficiency in React.js I excel at transforming design concepts into dynamic, user-friendly websites.',
      image: '/frontend.jpg',
      fallbackImage: 'https://via.placeholder.com/400x250/4A90E2/ffffff?text=Frontend+Development',
      color: '#4A90E2'
    },
    {
      title: 'UI/UX Designing',
      description: 'With strong expertise in UI/UX design, I excel at creating intuitive and visually engaging user experiences that transform into seamless, impactful Designs.',
      image: '/uiux.jpg',
      fallbackImage: 'https://via.placeholder.com/400x250/9B59B6/ffffff?text=UI%2FUX+Design',
      color: '#9B59B6'
    },
    {
      title: 'Back-End Development',
      description: 'With expertise in Node.js and Express.js, I build scalable backend systems and efficient server-side solutions using databases like MongoDB and MySQL.',
      image: '/backend.jpg',
      fallbackImage: 'https://via.placeholder.com/400x250/3498DB/ffffff?text=Backend+Development',
      color: '#3498DB'
    },
    {
      title: 'MERN App Development',
      description: 'Specialized in MERN stack, I build cross-platform, high-performance web apps with real-time data and seamless backend integration.',
      image: '/app.jpg',
      fallbackImage: 'https://via.placeholder.com/400x250/8E44AD/ffffff?text=MERN+App+Development',
      color: '#8E44AD'
    }
  ], []);

  const renderServiceCard = useCallback((service, index) => (
    <div key={index} className="service-card" style={{ '--accent-color': service.color }}>
      <div className="service-image">
        <img
          src={service.image}
          alt={service.title}
          onError={(e) => handleImageError(e, service.fallbackImage)}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="service-content">
        <h4>{service.title}</h4>
        <p>{service.description}</p>
      </div>
    </div>
  ), [handleImageError]);

  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-text">
          <p>
            I am a passionate tech enthusiast with a keen interest in digital marketing, web development, and technical support. 
            Currently, I am pursuing a Bachelor's in Computer Application (BCA) at Yeti International College, where I am expanding
            my skills in both creative and technical fields. My professional journey has given me hands-on experience as a digital marketing manager, 
            allowing me to craft impactful campaigns and develop a solid foundation in full-stack development, UI/UX design, and campaign analytics.
          </p>
          
          <p>
            One of my key achievements has been planning and executing data-driven marketing campaigns across platforms like Meta, Google, and TikTok, 
            which have significantly increased client engagement and optimized performance. Beyond marketing, I have provided IT support in academic 
            environments and played a vital role in streamlining digital infrastructure for schools and small businesses. My collaborative approach and 
            adaptability have helped me consistently deliver results under pressure and effectively support clients, educators, and teams.
          </p>
          
          <p>
            This diverse experience has given me a holistic understanding of both front-end and back-end technologies, along with strong communication 
            and project management skills. I am always eager to take on new challenges, enhance my abilities, and make meaningful contributions—whether 
            I am leading marketing initiatives, solving technical issues, or building digital solutions. Driven by curiosity and creativity, I am dedicated 
            to leaving a positive impact in every role I take on.
          </p>
        </div>

        <div className="what-i-do">
          <h3>What I Do</h3>
          <div className="services-grid">
            {services.map(renderServiceCard)}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default React.memo(About);
