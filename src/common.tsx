export interface Loadout {
  name?: string;
  class: string;
  weapon: string;
  ability: string;
  gadgets: string[];
}

export const baseLoadout = {
  class: 'light',
  weapon: 'lh1',
  ability: 'cloaking device',
  gadgets: ['goo grenade', 'frag grenade', 'gravity vortex'],
};

export const random = (max: number) => Math.floor(Math.random() * max);

export const getUniqueGadgets = (gadgetsList: string[]) => {
  const selectedGadgets: string[] = [];

  while (selectedGadgets.length < Math.min(3, gadgetsList.length)) {
    const pickedGadget = gadgetsList[random(gadgetsList.length)];
    if (!selectedGadgets.includes(pickedGadget))
      selectedGadgets.push(pickedGadget);
  }
  return selectedGadgets;
};
