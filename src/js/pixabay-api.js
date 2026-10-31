import axios from 'axios';

const API_KEY = '45436364-f90a0cfe5f9b13d8d0e95a311';
export const PER_PAGE = 15;
export const PER_PAGE_TABLET = 16;

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page, perPage = PER_PAGE) {
  const response = await axios.get('', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: perPage,
    },
  });

  return response.data;
}
