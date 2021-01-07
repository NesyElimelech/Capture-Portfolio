import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <Question layout>
        <motion.h4>{title}</motion.h4>
        {toggle && <div className="arrow">▲</div>}
        {!toggle && <div className="arrow">▼</div>}
      </Question>
      {toggle ? children : ''}
      <div className="faq-line"></div>
    </motion.div>
  );
};

const Question = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .arrow {
    font-size: 2rem;
    color: #d96ed4;
  }
`;

export default Toggle;
