import axios from 'axios';
import { addImage } from './product';

const BASE_URL = '/asset';

export async function fetchData(type) {
  let { data } = await axios.get(`${BASE_URL}/${type}.json`);

  if (type === 'product') {
    data = data.map((v, i) => ({ ...v, id: i + 1 }));
    data = addImage(data);
  }

  return data;
}