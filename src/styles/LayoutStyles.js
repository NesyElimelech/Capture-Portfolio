import styled from 'styled-components';

// ReUseable Styled Components
export const Layout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fff;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 3;
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
