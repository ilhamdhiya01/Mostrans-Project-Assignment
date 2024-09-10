const API_URL = 'https://rickandmortyapi.com/api';
const PATH_APINEXT = '/api';

export const PATH_PAGE_LIST_CHARACTER = '/characters-list';
export const PATH_PAGE_LIST_LOCATION = '/characters-by-location';
export const PATH_PAGE_LIST_CHARACTERBY_LOCATION = '/characters-by-location/:slug';
export const PATH_PAGE_DETAIL_CHARACTER = '/characters-list/:id';

export const PATH_APINEXT_LIST_CHARACTER = `${PATH_APINEXT}/character`;
export const PATH_APIBE_LIST_CHARACTER = `${API_URL}/character`;

export const PATH_APINEXT_LIST_LOCATION = `${PATH_APINEXT}/location`;
export const PATH_APIBE_LIST_LOCATION = `${API_URL}/location`;

export const PATH_APINEXT_LIST_EPISODE = `${PATH_APINEXT}/episode`;
export const PATH_APIBE_LIST_EPISODE = `${API_URL}/episode`;
