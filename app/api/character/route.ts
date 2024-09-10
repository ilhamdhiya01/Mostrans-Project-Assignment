/* eslint-disable @typescript-eslint/no-explicit-any */
import { PATH_APIBE_LIST_CHARACTER } from '@/constants/routes';
import axios from 'axios';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const response = await axios.get(PATH_APIBE_LIST_CHARACTER);
    return NextResponse.json(response.data);
  } catch (error: any) {
    return error;
  }
};