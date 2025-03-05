import styled from 'styled-components';

export const TileWrapper = styled.div`
  border-radius: 5px;
  background: #1c1a1f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1em;
  overflow: hidden;
  max-width: 5em;

  @media (max-width: 600px) {
    margin: 0.2em 0;
  }
`;

export const Image = styled.img`
  height: 5em;
  width: 5em;
`;

export const Label = styled.div`
  white-space: nowrap;
  text-align: center;
  color: white;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;
  font-family: 'Saira Extra Condensed', sans-serif;

  position: relative;
  width: 100%;
  max-width: 100%;
  display: block;

  &.scrolling {
    animation: my-animation 3s linear infinite;
  }

  @keyframes my-animation {
    0%,
    100% {
      opacity: 0;
    }
    30%,
    70% {
      opacity: 1;
    }
    from {
      transform: translateX(5%);
    }
    to {
      transform: translateX(-15%);
    }
  }
`;
