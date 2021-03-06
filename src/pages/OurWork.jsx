import React from 'react';
import { Link } from 'react-router-dom';
import Movie from '../components/Movie';
// Import Styles
import styled from 'styled-components';
import { Hide } from '../styles/LayoutStyles';
// Import images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
// Animations
import { motion } from 'framer-motion';
import {
  pageAnimation,
  slider,
  sliderContainer,
  titleAnim,
  lineAnim,
  photoAnim,
  fade,
} from '../animation';

const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: '#fff' }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <FirstMovie variants={fade}>
        <Hide>
          <motion.h2 variants={titleAnim}>The Athlete</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/the-athlete">
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Link>
        </Hide>
      </FirstMovie>
      <Movie
        title="The Racer"
        goesTo="/work/the-racer"
        imgSrc={theracer}
      ></Movie>
      <Movie
        title="Good Times"
        goesTo="/work/good-times"
        imgSrc={goodtimes}
      ></Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media screen and (max-width: 1300px) {
    padding: 1rem 2rem;
  }
`;
const FirstMovie = styled(motion.div)`
  padding-bottom: 10rem;
  h2 {
    padding: 1rem 0;
  }
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

// Frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background-color: #fffebf;
  z-index: 5;
`;
const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;

export default OurWork;
