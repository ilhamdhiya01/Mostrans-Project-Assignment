import toast from 'react-hot-toast';

export type Character = {
  locationId: string;
  id?: string;
  image: string;
  characterName: string;
};

export type LocationData = {
  id: string;
  locationName: string;
  characters: Array<Character>;
};

const STORAGE_KEY = 'locationsData';

export const getLocationsFromStorage = (): Array<LocationData> => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveLocationToStorage = (location: any) => {
  const locations = getLocationsFromStorage();

  const locationExists = locations.some((loc) => loc.locationName === location.locationName);

  if (locationExists) {
    return false;
  }

  locations.push(location);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(locations));
  return true;
};
