import {
  ActionContainer,
  ButtonWrapper,
  CenteredLabel,
  ClassName,
  Credits,
  Image,
  Roll,
  Wrapper,
  Previous
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

const baseLoadout = {
  class: 'light',
  weapon: 'lh1',
  ability: 'cloaking device',
  gadgets: ['goo grenade', 'frag grenade', 'gravity vortex']
}

const App = () => {
  const [oldLoadout, setOldLoadout] = useState<Loadout>(baseLoadout);
  const [pickedLoadout, pickLoadout] = useState<Loadout>(baseLoadout);
  const [nbPick, setNbPick] = useState(0);

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
    setNbPick((old) => old + 1)
  }, []);

  const rollAndSave = useCallback((className = Object.keys(loadout)[random(3)]) => {
    setOldLoadout(pickedLoadout)
    roll(className);
  }, [pickedLoadout])

  useEffect(() => {
    roll();
    setNbPick(0);
  }, [roll]);

  const setPreviousLoadout = useCallback(() => {
    pickLoadout(oldLoadout)
    setNbPick(0);
  }, [oldLoadout]);

  return (
    <Wrapper>
      <ActionContainer>
        <div>
          <Roll onClick={() => rollAndSave()}>Roll</Roll>
          {nbPick > 0 && <Previous onClick={setPreviousLoadout}>&#8617;</Previous>}
        </div>
        <Roll onClick={() => rollAndSave(pickedLoadout?.class)}>
          Roll {pickedLoadout?.class}
        </Roll>
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
          src={`class/${pickedLoadout.class}.png`}
          alt={pickedLoadout?.class}
        />
      )}
      <TileBar loadout={pickedLoadout} displayReserve={displayReserve} />
      <Credits>Made with ❤️ By Axoloot</Credits>
    </Wrapper>
  );
};

export default App;
