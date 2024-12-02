import styled from 'styled-components';
import { generateNeumorphicCss } from '../../Component/misc';

export const Wrapper = styled.div`
  height: 100svh;
  width 1svw;
`;

export const Image = styled.img`
  position: absolute;
  height: 100%;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
`;

export const Roll = styled.button`
  width: 7em;
  height: 3em;
  margin: 1em;
  text-transform: uppercase;
  border: none;
  color: white;
  font-weight: bold;

  ${generateNeumorphicCss('#6D7685', 'dome')}

  &:active {
    ${generateNeumorphicCss('#6D7685', 'inset')}
  }

  &:hover {
    color: black;
  }
`;

export const LongRoll = styled(Roll)`
  width: 15em;
`;

export const ActionContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  flex-direction: column;
`;

export const CenteredLabel = styled.label`
  align-content: center;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ClassName = styled.div`
  position: relative;
  width: 15em;
  margin: 0.5em;
  margin-left: 16em;
  font-weight: bold;
  font-style: italic;
  color: white;
  text-transform: uppercase;
  font-family: 'Saira Extra Condensed', sans-serif;
`;

export const Credits = styled.div`
  position: absolute;
  bottom: 0;
  right: 10px;
  font-size: 0.9em;
  font-family: 'Saira Extra Condensed', sans-serif;
`;
