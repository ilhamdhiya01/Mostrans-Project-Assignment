'use client';

import React from 'react';
import { useCharacterStore } from '@/store/character/useCharacterStore';
import CharacterCardItem from '@/components/CharacterCardItem';

const CharactersList = () => {
  const { dataListCharacter } = useCharacterStore();
  return (
    <>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        {dataListCharacter?.results.map((item) => (
          <CharacterCardItem {...item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default CharactersList;
