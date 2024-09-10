'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PATH_PAGE_LIST_CHARACTER } from '@/constants/routes';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(PATH_PAGE_LIST_CHARACTER);
  }, [router]);

  return <div />;
};
export default Home;
