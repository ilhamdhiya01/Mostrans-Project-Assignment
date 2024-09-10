import { PATH_APINEXT_LIST_CHARACTER } from '@/constants/routes';
import axios from 'axios';

export const getListCharacter = async (): Promise<ListCharacterRes | undefined> => {
  const res = await axios.get(PATH_APINEXT_LIST_CHARACTER);
  if (!res) {
    throw new Error('Error fetch list character');
  }
  return res.data as ListCharacterRes;
};
