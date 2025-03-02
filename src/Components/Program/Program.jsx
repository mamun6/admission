import React from 'react';
import './Program.css';
import { assets } from '../../assets/assets';
import Card from './Card';

const Program = () => {
  return (
    <div className="container">
      {/* Heading Section */}
      <div className="program-heading">
        <h1>Our Engineering Programs</h1>
        <p>Explore a range of exciting and challenging engineering disciplines designed to shape the future.</p>
      </div>
      
      {/* Card Container */}
      <div className="card-container">
        <Card
          title="Computer Science Engineering"
          image={assets.program_1}
          description="Learn about algorithms and learning the future computing."
        />
        <Card
          title="Civil Engineering"
          image={assets.program_2}
          description="Explore the world of infrastructure, construction, and environmental sustainability."
        />
        <Card
          title="Mechanical Engineering"
          image={assets.program_3}
          description="Dive into the study of machines, thermodynamics, and engineering design."
        />
        <Card
          title="Electrical Engineering"
          image={assets.program_1}
          description="Study circuits, energy systems, and cutting-edge technologies like renewable energy."
        />
        <Card
          title="Chemical Engineering"
          image={assets.program_2}
          description="Understand the processes that convert raw materials into valuable products."
        />
        <Card
          title="Aerospace Engineering"
          image={assets.program_3}
          description="Learn about flight dynamics, spacecraft, and aerodynamics."
        />
        <Card
          title="Software Engineering"
          image={assets.program_1}
          description="Focus on coding, software development, and modern programming languages."
        />
        <Card
          title="Biotechnology Engineering"
          image={assets.program_2}
          description="Explore the intersection of biology and technology in the medical field."
        />
      </div>
    </div>
  );
};

export default Program;
