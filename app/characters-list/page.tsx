'use client';

import React from 'react';
import CharactersList from './components/CharactersList';
import Navigation from '@/components/Navigation';

const CharactersListPage = () => {
  return (
    <>
      <div className='flex justify-center'>
        <Navigation />
      </div>
      <div className='mt-4'>
        <CharactersList />
      </div>
    </>
  );
};

export default CharactersListPage;
