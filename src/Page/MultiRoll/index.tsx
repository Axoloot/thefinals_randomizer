import { useCallback, useState } from 'react';
import { ActionContainer, Roll, RollInput, Wrapper } from '../App/styles';
import TileBar from '../../Component/TileBar';
import { Center } from '../../Component/TileBar/styles';
import { baseLoadout, getUniqueGadgets, Loadout, random } from '../../common';
import loadout from '../../loadout';

const MultiRoll = () => {
  const [nb, setNb] = useState(1);
  const [loadouts, setLoadouts] = useState<Loadout[]>([baseLoadout]);

  const rollMultiple = useCallback(() => {
    const newLoadouts: Loadout[] = [];

    for (let i = 0; i < nb; i++) {
      const selectedClass =
        Object.keys(loadout)[random(Object.keys(loadout).length)];
      const { abilities, gadgets, weapons } =
        loadout[selectedClass as keyof typeof loadout];

      newLoadouts.push({
        class: selectedClass,
        weapon: weapons[random(weapons.length)],
        ability: abilities[random(abilities.length)],
        gadgets: getUniqueGadgets(gadgets),
      });
    }
    setLoadouts(newLoadouts);
    console.log(newLoadouts);
  }, [nb]);

  return (
    <Wrapper>
      <ActionContainer>
        <RollInput
          type="number"
          defaultValue={1}
          min={1}
          max={5}
          onChange={e => setNb(parseInt(e.currentTarget.value))}
        />
        <Roll onClick={rollMultiple}>Roll</Roll>
      </ActionContainer>
      <Center>
        {loadouts.map((l, i) => (
          <TileBar loadout={l} multi key={i} displayTitle={i == 0} />
        ))}
      </Center>
    </Wrapper>
  );
};

export default MultiRoll;
