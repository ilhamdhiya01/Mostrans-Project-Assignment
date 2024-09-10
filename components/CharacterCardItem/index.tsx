import React, { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { replaceString } from '@/utils/helpers';
import { PATH_PAGE_DETAIL_CHARACTER } from '@/constants/routes';

type CharacterCardItemProps = {
  id?: number;
  name: string;
  image: string;
};

const CharacterCardItem: React.FC<CharacterCardItemProps> = ({ image, name, id }) => {
  const router = useRouter();

  const handleRedirectToDetailCharacter = useCallback(() => {
    if (id) {
      router.push(
        replaceString(PATH_PAGE_DETAIL_CHARACTER, {
          ':id': id,
        })
      );
    }
  }, [id, router]);

  return (
    <>
      <div onClick={handleRedirectToDetailCharacter} className='overflow-hidden rounded-md shadow-md w-full h-full border cursor-pointer relative group'>
        <div className='absolute w-full h-full inset-0 flex flex-col gap-2 justify-center items-center bg-neutral-800/70 translate-y-[250px] transition-all duration-300 group-hover:translate-y-0 text-center'>
          <span className=' text-white font-bold drop-shadow-lg shadow-black px-3 text-lg lg:text-2xl'>{name}</span>
        </div>
        <Image src={image} alt='' width={500} height={500} className='w-full h-full object-cover' />
      </div>
    </>
  );
};

export default CharacterCardItem;
