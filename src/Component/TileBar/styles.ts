import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -15%);

  @media (max-width: 600px) {
    flex-direction: column;
    left: 15%;
  }
`;

export const TileWrapper = styled.div`
  position: relative;
  display: flex;
  border-top: 2px solid white;
  padding-top: 1em;
  margin: 0 1em;

  @media (max-width: 600px) {
    flex-direction: column;
    scale: 75%;
    padding-top: 0;
  }

  &:nth-child(3) > div {
    top: -9%;
  }
`;

export const Title = styled.div`
  text-align: center;
  color: white;
  font-weight: bold;
  position: absolute;
  top: -25%;
  left: 50%;
  transform: translate(-50%, 0);
  font-family: 'Saira Extra Condensed', sans-serif;
`;
