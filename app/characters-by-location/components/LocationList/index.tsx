'use client';

import React, { useEffect } from 'react';
import LocationCardItem from '../LocationCardItem';
import { getLocationsFromStorage } from '@/hooks/useLocalStorage';
import useLocationFromLocalStorage from '@/store/useLocationFromLocalStorage';

const LocationList = () => {
  const { setLocationsFromLocalstorage, locationsFromLocalstorage } = useLocationFromLocalStorage();

  useEffect(() => {
    const storedLocations = getLocationsFromStorage();
    setLocationsFromLocalstorage(storedLocations);
  }, [setLocationsFromLocalstorage]);

  return (
    <>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        {locationsFromLocalstorage?.map((item) => (
          <LocationCardItem key={item.id} locationName={item.locationName} />
        ))}
      </div>
    </>
  );
};

export default LocationList;
