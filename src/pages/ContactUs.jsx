import React from 'react';
// Import Styles
import styled from 'styled-components';
import { Hide } from '../styles/LayoutStyles';
// Import Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: '#fff' }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send An Email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Social Media</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  @media screen and (max-width: 1300px) {
    padding: 1rem 2rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: #000;
  @media screen and (max-width: 1300px) {
    h2 {
      font-size: 4rem;
      font-weight: bold;
    }
  }
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    @media screen and (max-width: 1300px) {
      font-size: 2rem;
    }
  }
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
  @media screen and (max-width: 1300px) {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export default ContactUs;
