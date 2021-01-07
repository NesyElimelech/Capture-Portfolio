import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// Import movies data
import { MovieState } from '../movieState';
import Award from '../components/Award';
// Import Styled Components
import styled from 'styled-components';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, photoAnim, titleAnim, fade } from '../animation';
import { useScroll } from '../components/useScroll';

const MovieDetail = () => {
  // Gets the URL we came from and compare it to the movie url
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  // Every time the movies array or the url is changed, update the current movie.
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    //   Wait till we have the information from the movie and then render it out
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HeadLine
            ref={element}
            animate={controls}
            initial="hidden"
            variants={fade}
          >
            <motion.h2 variants={titleAnim} initial="hidden" animate="show">
              {movie.title}
            </motion.h2>
            <img src={movie.mainImg} alt="Movie posters" />
          </HeadLine>
          <Awards
            ref={element2}
            animate={controls2}
            initial="hidden"
            variants={pageAnimation}
          >
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <motion.img
              ref={element3}
              animate={controls3}
              initial="hidden"
              variants={photoAnim}
              src={movie.secondaryImg}
              alt="Movie posters"
            />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: #fff;
  @media screen and (max-width: 1300px) {
    padding: 1rem 0rem;
  }
`;
const HeadLine = styled(motion.div)`
  min-width: 100vh;
  min-height: 100vh;
  position: relative;

  h2 {
    font-size: 8rem;
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    text-shadow: 7px 7px 10px rgba(0, 0, 0, 0.5);
    @media screen and (max-width: 1300px) {
      font-size: 3.5rem;
      left: 20%;
    }
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    @media screen and (max-width: 1300px) {
      object-fit: cover;
    }
  }
  @media screen and (max-width: 1300px) {
    min-width: 80vw;
  }
`;

const Awards = styled(motion.div)`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 1300px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const ImageDisplay = styled(motion.div)`
  overflow: hidden;
  @media screen and (max-width: 1300px) {
    padding: 0 0;
  }
  img {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    @media screen and (max-width: 1300px) {
      object-fit: cover;
    }
  }
`;

export default MovieDetail;
