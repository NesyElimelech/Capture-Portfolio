import React from 'react';
// Import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
// Import image
import home2 from '../img/home2.png';
// Import styles
import styled from 'styled-components';
import { fade } from '../animation';
import { Layout, Description, Image } from '../styles/LayoutStyles';
import { useScroll } from './useScroll';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services variants={fade} ref={element} animate={controls} initial="hidden">
      <Description>
        <h2>
          High <span>quality</span> services{' '}
        </h2>
        <Cards className="cards">
          <Card>
            <div className="icon">
              <img src={clock} alt="Clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="Teamwork icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="Diaphragm icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="Money icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="A Camera" />
      </Image>
    </Services>
  );
};

// Styled Components
const Services = styled(Layout)`
  flex-direction: row-reverse;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    justify-content: center;
  }
  h2 {
    padding-bottom: 5rem;
    margin-left: 4rem;
    @media screen and (max-width: 1300px) {
      margin-left: 0;
      font-size: 2.5rem;
    }
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
    margin-left: 4rem;
  }
`;

const Cards = styled.div`
  display: flex;
  margin-left: 4rem;
  flex-wrap: wrap;
  @media screen and (max-width: 1370px) {
    margin-left: 0;
    padding: 1rem auto;
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;

  @media screen and (max-width: 1300px) {
    flex-basis: 7rem;
    margin: 1rem;
    justify-content: center;
  }
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background-color: #fff;
      color: #000;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
