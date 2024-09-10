import React from 'react';
import { Metadata } from 'next';

type Props = {
  children?: React.ReactNode;
  // props....
};

export const metadata: Metadata = {
  title: 'List Location Page',
  description: 'Show characters list',
};

// ?======================================================//
const CharactersByLocationLayout = ({ children }: Props) => (
  <>
    <main className='box-border relative w-full max-w-[90%] lg:max-w-[80%] mx-auto'>{children}</main>
  </>
);

export default CharactersByLocationLayout;
