import {
  ActionContainer,
  ButtonWrapper,
  CenteredLabel,
  ClassName,
  Credits,
  Image,
  LongRoll,
  Roll,
  Wrapper,
} from './styles';
import loadout from '../../loadout';
import savedLoadout from '../../savedLoadout';
import { useCallback, useEffect, useState } from 'react';
import TileBar from '../../Component/TileBar';
import Dropdown from '../../Component/Dropdown';

export interface Loadout {
  name?: string;
  class: string;
  weapon: string;
  ability: string;
  gadgets: string[];
}

const App = () => {
  const [pickedLoadout, pickLoadout] = useState<Loadout | undefined>();
  const [pinnedLoadout, setPinnedLoadout] = useState<any>();
  const [displayReserve, toggleReserve] = useState(false);
  const random = (max: number) => Math.floor(Math.random() * max);

  const rollSaved = useCallback(() => {
    pickLoadout(savedLoadout[random(savedLoadout.length)]);
  }, []);

  const roll = useCallback((className = Object.keys(loadout)[random(3)]) => {
    const { abilities, gadgets, weapons } =
      loadout[className as keyof typeof loadout];

    const getUniqueGadgets = (gadgetsList: string[]) => {
      const selectedGadgets: any[] = [];

      while (selectedGadgets.length < 6) {
        const pickedGadget = gadgetsList[random(gadgetsList.length)];
        if (!selectedGadgets.includes(pickedGadget))
          selectedGadgets.push(pickedGadget);
      }
      return selectedGadgets;
    };

    const uniqueGadgets = getUniqueGadgets(gadgets);

    pickLoadout({
      class: className,
      weapon: weapons[random(weapons.length)],
      ability: abilities[random(abilities.length)],
      gadgets: uniqueGadgets,
    });
  }, []);

  useEffect(() => {
    roll();
  }, [roll]);

  return (
    <Wrapper>
      <ActionContainer>
        <ButtonWrapper>
          <Roll onClick={() => roll()}>Random</Roll>
          <Roll onClick={() => roll(pickedLoadout?.class)}>
            {pickedLoadout?.class}
          </Roll>
        </ButtonWrapper>
        <LongRoll onClick={rollSaved}>Loadout</LongRoll>
        <CenteredLabel>
          <input
            type="checkbox"
            onChange={e => toggleReserve(a => !a)}
            checked={displayReserve}
          />
          Show reserve
        </CenteredLabel>
      </ActionContainer>
      <Dropdown
        options={Object.keys(loadout)}
        onSelect={(e: string) => roll(e)}
        selected={pickedLoadout?.class}
      />
      {pickedLoadout?.name && <ClassName>{pickedLoadout.name}</ClassName>}
      {pickedLoadout && (
        <Image
          src={require(`../../Static/class/${pickedLoadout.class}.png`)}
          alt={pickedLoadout?.class}
        />
      )}
      <TileBar loadout={pickedLoadout} displayReserve={displayReserve} />
      <Credits>Made with ❤️ By Axoloot</Credits>
    </Wrapper>
  );
};

export default App;
