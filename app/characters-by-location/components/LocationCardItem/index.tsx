'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import kebabCase from 'lodash/kebabCase';
import { replaceString } from '@/utils/helpers';
import { PATH_PAGE_LIST_CHARACTERBY_LOCATION } from '@/constants/routes';

type LocationCardItemProps = {
  locationName: string;
};

const LocationCardItem: React.FC<LocationCardItemProps> = ({ locationName }) => {
  const router = useRouter();

  const handleRedirectToDetailCharacter = useCallback(() => {
    router.push(
      replaceString(PATH_PAGE_LIST_CHARACTERBY_LOCATION, {
        ':slug': kebabCase(locationName),
      })
    );
  }, [router]);

  return (
    <>
      <div onClick={handleRedirectToDetailCharacter} className='overflow-hidden rounded-md shadow-md w-full h-full border cursor-pointer relative group p-5 text-center'>
        <span className='text-lg font-semibold'>{locationName}</span>
      </div>
    </>
  );
};

export default LocationCardItem;
