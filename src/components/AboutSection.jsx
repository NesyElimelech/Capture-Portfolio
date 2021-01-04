import React from 'react';
// Import image
import home1 from '../img/home1.png';
// import Styles
import { Layout, Description, Hide, Image } from '../styles/LayoutStyles';
// Framer Motion
// import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>Dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. we
          have professionals with amazing skills.
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="Man with a camera" />
      </Image>
    </Layout>
  );
};

export default AboutSection;
