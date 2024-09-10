'use client';

import Icon from '@/components/Icon';
import { PATH_PAGE_LIST_CHARACTER } from '@/constants/routes';
import { LocationData, saveLocationToStorage } from '@/hooks/useLocalStorage';
import { useCharacterStore } from '@/store/character/useCharacterStore';
import useLocationFromLocalStorage from '@/store/useLocationFromLocalStorage';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';

type DetailAppPageProps = {
  params: {
    id: string;
  };
};

const DetailAppPage: React.FC<DetailAppPageProps> = ({ params }) => {
  const { id } = params;
  const { dataListCharacter } = useCharacterStore();
  const [locationName, setLocationName] = useState('');
  const [locationId] = useState(new Date().toISOString());
  const { setCharacters, characters } = useLocationFromLocalStorage();
  const router = useRouter();
  const detailData = useMemo(() => {
    if (dataListCharacter) {
      return dataListCharacter.results.find((item) => item.id.toString() === id);
    }
  }, [dataListCharacter, id]);

  const location = useMemo(() => {
    if (locationName) {
      return {
        id: locationId,
        locationName: locationName,
        characters: characters.filter((item) => item.locationId === locationId),
      };
    }
    return {};
  }, [locationName, locationId, characters]);
  const handleAssignLocation = useCallback(() => {
    const success = saveLocationToStorage(location as LocationData);
    if (success) {
      toast.success('Location name successuflly added');
      setLocationName('');
    }
  }, [location]);

  useEffect(() => {
    if (detailData) {
      setCharacters({ characterName: detailData?.name as string, image: detailData?.image as string, id: id, locationId: locationId });
    }
  }, [detailData, id, setCharacters]);

  console.log('characters', characters);

  const handleBackToCharacterList = useCallback(() => {
    router.push(PATH_PAGE_LIST_CHARACTER);
  }, []);

  return (
    <>
      <div className='inline-flex items-center gap-2 cursor-pointer' onClick={handleBackToCharacterList}>
        <Icon icon='TbArrowLeft' fontSize={20} className='text-black' />
        <span className='text-lg font-semibold'>Back</span>
      </div>
      <div className='rounded-lg overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-2 border mt-2'>
        <div>
          <Image src={detailData?.image as string} alt='detail image' width={400} height={400} className='object-cover w-full h-[250px] lg:w-[400px] lg:h-[400px]' />
        </div>
        <div className='p-5'>
          <h2 className='font-bold text-2xl'>{detailData?.name}</h2>
          <ul className='pt-4'>
            <li className='w-full flex items-center text-lg font-semibold'>
              <span className='w-[30%]'>Status</span>
              <span className='w-[5%]'>:</span>
              <span className='w-[65%]'>{detailData?.status}</span>
            </li>
            <li className='w-full flex items-center text-lg font-semibold'>
              <span className='w-[30%]'>Species</span>
              <span className='w-[5%]'>:</span>
              <span className='w-[65%]'>{detailData?.species}</span>
            </li>
            <li className='w-full flex items-center text-lg font-semibold'>
              <span className='w-[30%]'>Gender</span>
              <span className='w-[5%]'>:</span>
              <span className='w-[65%]'>{detailData?.gender}</span>
            </li>
            <li className='w-full flex items-center text-lg font-semibold'>
              <span className='w-[30%]'>Type</span>
              <span className='w-[5%]'>:</span>
              <span className='w-[65%]'>{detailData?.type}</span>
            </li>
          </ul>
          <h2 className='font-bold text-2xl mt-4'>Assign To Location</h2>
          <div className='pt-4 flex flex-col gap-3 items-center'>
            <input onChange={({ target }) => setLocationName(target.value)} value={locationName} type='text' className='border p-2 outline-none rounded-md w-full' />
            <button onClick={handleAssignLocation} className=' bg-blue-500 text-white  py-2 font-semibold rounded-md w-full transition duration-200 hover:bg-blue-600'>
              Assign
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailAppPage;
