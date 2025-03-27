import {
  ActionContainer,
  ClassName,
  Credits,
  Image,
  Roll,
  Wrapper,
  Previous,
  Link,
} from './styles';
import loadout from '../../loadout';
import { useCallback, useEffect, useState } from 'react';
import TileBar from '../../Component/TileBar';
import Dropdown from '../../Component/Dropdown';
import { baseLoadout, getUniqueGadgets, Loadout, random } from '../../common';

const App = () => {
  const [oldLoadout, setOldLoadout] = useState<Loadout>(baseLoadout);
  const [pickedLoadout, pickLoadout] = useState<Loadout>(baseLoadout);
  const [nbPick, setNbPick] = useState(0);

  const roll = useCallback((className = Object.keys(loadout)[random(3)]) => {
    const { abilities, gadgets, weapons } =
      loadout[className as keyof typeof loadout];

    const uniqueGadgets = getUniqueGadgets(gadgets);

    pickLoadout({
      class: className,
      weapon: weapons[random(weapons.length)],
      ability: abilities[random(abilities.length)],
      gadgets: uniqueGadgets,
    });
    setNbPick(old => old + 1);
  }, []);

  const rollAndSave = useCallback(
    (className = Object.keys(loadout)[random(3)]) => {
      setOldLoadout(pickedLoadout);
      roll(className);
    },
    [pickedLoadout]
  );

  useEffect(() => {
    roll();
    setNbPick(0);
  }, [roll]);

  const setPreviousLoadout = useCallback(() => {
    pickLoadout(oldLoadout);
    setNbPick(0);
  }, [oldLoadout]);

  return (
    <Wrapper>
      <ActionContainer>
        <div>
          <Roll onClick={() => rollAndSave()}>Roll</Roll>
          {nbPick > 0 && (
            <Previous onClick={setPreviousLoadout}>&#8617;</Previous>
          )}
        </div>
        <Roll onClick={() => rollAndSave(pickedLoadout?.class)}>
          Roll {pickedLoadout?.class}
        </Roll>
        <Link to="/multi" end>
          <Roll>Multi Roll</Roll>
        </Link>
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
      <TileBar loadout={pickedLoadout} />
      <Credits>Made with ❤️ By Axoloot</Credits>
    </Wrapper>
  );
};

export default App;
