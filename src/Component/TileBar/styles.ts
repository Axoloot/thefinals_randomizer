import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -15%);
`;

export const TileWrapper = styled.div`
  position: relative;
  display: flex;
  border-top: 2px solid white;
  padding-top: 1em;
  margin: 0 1em;
`;

export const Title = styled.h2`
  text-align: center;
  color: white;
  font-weight: bold;
  position: absolute;
  top: -25%;
  left: 50%;
  transform: translate(-50%, 0);
  font-family: 'Saira Extra Condensed', sans-serif;
`;
