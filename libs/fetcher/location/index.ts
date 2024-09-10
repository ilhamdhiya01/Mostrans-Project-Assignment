import { PATH_APINEXT_LIST_LOCATION } from '@/constants/routes';
import axios from 'axios';

export const getDataLocation = async () => {
  const res = await axios.get(PATH_APINEXT_LIST_LOCATION);
  if (!res) {
    throw new Error('Error fetch data location');
  }
  return res.data;
};
