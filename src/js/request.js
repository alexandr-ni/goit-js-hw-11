import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { removeLoadBtn, addLoadBtn } from '../index';

export async function searchRequest(text, value) {
  try {
    const r = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '37083329-36222d9a5ab659cb9784863e4',
        q: `${text}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: value,
        per_page: 40,
      },
    });
    if (r.data.hits.length === 0) {
      removeLoadBtn();
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
        );
    } else {
      addLoadBtn();
      return r.data.hits;
    }
  } catch (error) {
    Notify.failure('Sorry, something went wrong?');
  }
}
