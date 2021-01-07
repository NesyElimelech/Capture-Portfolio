import React from 'react';
import { Link } from 'react-router-dom';
// Import Styles
import styled from 'styled-components';
import { Hide } from '../styles/LayoutStyles';
// Import animation
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim, lineAnim } from '../animation';
import { useScroll } from '../components/useScroll';
const Movie = ({ title, goesTo, imgSrc }) => {
  const [element, controls] = useScroll();
  return (
    <StyledMovie
      ref={element}
      variants={fade}
      animate={controls}
      initial="hidden"
    >
      <motion.h2 variants={titleAnim}>{title}</motion.h2>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <Link to={goesTo}>
        <Hide>
          <motion.img variants={photoAnim} src={imgSrc} alt="Movie Poster" />
        </Hide>
      </Link>
    </StyledMovie>
  );
};

const StyledMovie = styled(motion.div)`
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

export default Movie;
