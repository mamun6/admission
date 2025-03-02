import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Our University</h2>
        <div className="about-content">
          <p className="about-text">
            Welcome to <strong>Prestige University</strong>, a globally recognized institution dedicated to excellence in education, research, and innovation. Established in <strong>1950</strong>, our university has been at the forefront of academic achievement, fostering a community of scholars, thinkers, and leaders who are committed to making a positive impact on the world.
          </p>
          <p className="about-text">
            Our mission is to provide a transformative educational experience that empowers students to reach their full potential. We offer a wide range of undergraduate, graduate, and doctoral programs across various disciplines, all designed to equip students with the knowledge, skills, and values necessary to succeed in a rapidly changing world.
          </p>
          <p className="about-text">
            At Prestige University, we believe in the power of innovation and collaboration. Our state-of-the-art facilities, world-class faculty, and vibrant campus life create an environment where students can thrive both academically and personally. We are committed to fostering a culture of inclusivity, diversity, and respect, ensuring that every member of our community feels valued and supported.
          </p>
          <h3 className="sub-title">Our Vision</h3>
          <p className="about-text">
            Our vision is to be a leading global university that inspires and prepares students to become ethical leaders and innovators who will shape the future. We strive to create a lasting impact through cutting-edge research, community engagement, and a commitment to sustainability.
          </p>
          <h3 className="sub-title">Our History</h3>
          <p className="about-text">
            Founded in <strong>1950</strong>, Prestige University began as a small college with a focus on liberal arts and sciences. Over the decades, we have grown into a comprehensive university with a diverse range of programs and a strong reputation for academic excellence. Our rich history is a testament to our enduring commitment to education and our ability to adapt to the evolving needs of society.
          </p>
          <h3 className="sub-title">Our Values</h3>
          <ul className="values-list">
            <li><strong>Excellence:</strong> We strive for the highest standards in all that we do.</li>
            <li><strong>Integrity:</strong> We uphold the principles of honesty, fairness, and ethical behavior.</li>
            <li><strong>Innovation:</strong> We embrace creativity and the pursuit of new ideas.</li>
            <li><strong>Diversity:</strong> We celebrate and respect the unique contributions of every individual.</li>
            <li><strong>Community:</strong> We are committed to building a supportive and inclusive environment for all.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;