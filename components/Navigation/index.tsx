'use client';

import { PATH_PAGE_LIST_CHARACTER, PATH_PAGE_LIST_LOCATION } from '@/constants/routes';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navigation = () => {
  const pathname = usePathname();
  const isCharacterPage = pathname.startsWith(PATH_PAGE_LIST_CHARACTER);
  const isLocationPage = pathname.startsWith(PATH_PAGE_LIST_LOCATION);
  return (
    <>
      <div className='inline-flex items-center gap-3'>
        <Link
          href={PATH_PAGE_LIST_CHARACTER}
          className={classNames('', {
            'text-blue-500 font-semibold': isCharacterPage,
          })}
        >
          Character
        </Link>
        <Link
          href={PATH_PAGE_LIST_LOCATION}
          className={classNames('', {
            'text-blue-500 font-semibold': isLocationPage,
          })}
        >
          Location
        </Link>
      </div>
    </>
  );
};

export default Navigation;
