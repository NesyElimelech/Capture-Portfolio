import styled from 'styled-components';
import { motion } from 'framer-motion';

// ReUseable Styled Components
export const Layout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  padding: 5rem 10rem;
  color: #fff;
  overflow: hidden;
  @media screen and (max-width: 1300px) {
    display: block;
    text-align: center;
    padding: 1rem 0rem;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 3;
  @media screen and (max-width: 1300px) {
    padding-right: 0;
    button {
      margin: 2rem 0 5rem 0;
    }
    h2 {
      font-size: 2.5rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 3;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
