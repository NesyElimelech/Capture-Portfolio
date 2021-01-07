import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { lineAnim } from '../animation';
import { useScroll } from './useScroll';

const Award = ({ title, description }) => {
  const [element, controls] = useScroll();
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <motion.div
        ref={element}
        variants={lineAnim}
        initial="hidden"
        animate={controls}
        className="line"
      ></motion.div>
      <p>{description}</p>
    </AwardStyle>
  );
};

const AwardStyle = styled(motion.div)`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
  }
`;
export default Award;
