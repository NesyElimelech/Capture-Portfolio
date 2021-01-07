import React from 'react';
import Toggle from './Toggle';
// Import Styles
import styled from 'styled-components';
import { Layout } from '../styles/LayoutStyles';
// Animation
import { AnimateSharedLayout } from 'framer-motion';

import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';

const FAQSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              repudiandae!
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              rerum.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payments Methods">
          <div className="answer">
            <p>Lorem, ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              possimus ad quasi.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products Do You Offer?">
          <div className="answer">
            <p>Lorem ipsum dolor.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(Layout)`
  display: block;
  @media screen and (max-width: 1300px) {
    width: 90%;
    margin: 2rem;
    h2 {
      font-size: 2.5rem;
    }
  }
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
  }
  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
    @media screen and (max-width: 1300px) {
      text-align: left;
    }
  }
  .answer {
    padding: 1rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export default FAQSection;
