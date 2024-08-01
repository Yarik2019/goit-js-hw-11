export function getPhotos(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '45225008-7dd168b8c56fcbfbf82a602af';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
