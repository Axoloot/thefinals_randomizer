import { Loadout } from '../../common';
import Tile from '../Tile';
import { Wrapper, TileWrapper, Title } from './styles';

interface TileBarProps {
  loadout?: Loadout;
  multi?: boolean;
  displayTitle?: boolean;
}

const TileBar = ({
  loadout,
  multi = false,
  displayTitle = true,
}: TileBarProps) => {
  if (!loadout) return null;

  return (
    <Wrapper $multi={multi}>
      <TileWrapper $displayBorder={displayTitle}>
        {displayTitle && <Title>SPECIALIZATION</Title>}
        <Tile content={loadout.ability} />
      </TileWrapper>
      <TileWrapper $displayBorder={displayTitle}>
        {displayTitle && <Title>WEAPON</Title>}
        <Tile content={loadout.weapon} />
      </TileWrapper>
      <TileWrapper $displayBorder={displayTitle}>
        {displayTitle && <Title>GADGETS</Title>}
        {loadout.gadgets.slice(0, 3).map((gadget, i) => (
          <Tile key={i} content={gadget} />
        ))}
      </TileWrapper>
    </Wrapper>
  );
};

export default TileBar;
