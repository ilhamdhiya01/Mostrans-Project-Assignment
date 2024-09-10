'use client';

import CharacterCardItem from '@/components/CharacterCardItem';
import Icon from '@/components/Icon';
import { PATH_PAGE_LIST_LOCATION } from '@/constants/routes';
import { getLocationsFromStorage } from '@/hooks/useLocalStorage';
import useLocationFromLocalStorage from '@/store/useLocationFromLocalStorage';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect } from 'react';

type DetailAppPageProps = {
  params: {
    slug: string;
  };
};

const ListCharacterByLocationPage: React.FC<DetailAppPageProps> = ({ params }) => {
  const { slug } = params;
  const { setLocationsFromLocalstorage, locationsFromLocalstorage } = useLocationFromLocalStorage();
  const router = useRouter();

  useEffect(() => {
    const storedLocations = getLocationsFromStorage();
    setLocationsFromLocalstorage(storedLocations);
  }, [setLocationsFromLocalstorage]);

  const handleBackToCharacterList = useCallback(() => {
    router.push(PATH_PAGE_LIST_LOCATION);
  }, [router]);

  return (
    <>
      <div>
        <div className='flex justify-between items-center'>
          <div className='inline-flex items-center gap-2 cursor-pointer' onClick={handleBackToCharacterList}>
            <Icon icon='TbArrowLeft' fontSize={20} className='text-black' />
            <span className='lg:text-lg font-semibold'>Back</span>
          </div>
          <h2 className='text-lg lg:text-2xl font-semibold lg:font-bold'>Character from {slug}</h2>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>{locationsFromLocalstorage?.map((item) => item.characters.map((subItem) => <CharacterCardItem key={subItem.id} name={subItem.characterName} image={subItem.image} />))}</div>
      </div>
    </>
  );
};

export default ListCharacterByLocationPage;
