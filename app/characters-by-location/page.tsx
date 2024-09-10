import React from 'react';
import LocationList from './components/LocationList';
import Navigation from '@/components/Navigation';

const LocationListPage = () => {
  return (
    <>
      <div className='flex justify-center'>
        <Navigation />
      </div>
      <div className='mt-4'>
        <LocationList />
      </div>
    </>
  );
};

export default LocationListPage;
