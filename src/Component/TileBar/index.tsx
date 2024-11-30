import { Loadout } from '../../Page/App';
import Tile from '../Tile';
import { Wrapper, TileWrapper, Title } from './styles';

interface TileBarProps {
  loadout?: Loadout;
  displayReserve?: boolean;
}

const TileBar = (props: TileBarProps) => {
  const { loadout, displayReserve = false } = props;

  return (
    <Wrapper>
      <TileWrapper>
        <Title>SPECIALIZATION</Title>
        <Tile content={loadout?.ability} />
      </TileWrapper>
      <TileWrapper>
        <Title>WEAPON</Title>
        <Tile content={loadout?.weapon} />
      </TileWrapper>
      <TileWrapper>
        <Title>GADGETS</Title>
        <Tile content={loadout?.gadgets[0]} />
        <Tile content={loadout?.gadgets[1]} />
        <Tile content={loadout?.gadgets[2]} />
      </TileWrapper>
      {displayReserve && (
        <TileWrapper>
          <Title>RESERVE</Title>
          <Tile content={loadout?.gadgets[3]} />
          <Tile content={loadout?.gadgets[4]} />
          <Tile content={loadout?.gadgets[5]} />
        </TileWrapper>
      )}
    </Wrapper>
  );
};

export default TileBar;
