import { Character, LocationData } from '@/hooks/useLocalStorage';
import { create } from 'zustand';

type GlobalState = {
  locationsFromLocalstorage: Array<LocationData>;
  characters: Array<Character>;
};

type GlobalActions = {
  setLocationsFromLocalstorage: (locations: Array<LocationData>) => void;
  setCharacters: (character: Character) => void;
};

type GlobalStore = GlobalState & GlobalActions;

const initialValue: GlobalState = {
  locationsFromLocalstorage: [],
  characters: [],
};

const useLocationFromLocalStorage = create<GlobalStore>((set, get) => ({
  ...initialValue,
  setLocationsFromLocalstorage: (locations) => set({ locationsFromLocalstorage: locations }),
  // setCharacters: (character) => set((state) => ({ characters: [...state.characters, character] })),
  setCharacters: (character) => {
    const { characters } = get();
    if (!characters.some((u) => u.id === character.id)) {
      set({ characters: [...characters, character] });
    }
  },
}));

export default useLocationFromLocalStorage;
