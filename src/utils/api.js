import axios from 'axios';

const BASE_URL = '/asset';
const IMAGE_URL = '/images';

export async function fetchProducts() {
  const { data } = await axios.get(`${BASE_URL}/product.json`);

  const products = data.map((v, i) => ({ id: i + 1, image: `${IMAGE_URL}/${v.brand}.jpg`, ...v }));

  return products;
}