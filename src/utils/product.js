const IMAGE_URL = '/images';

export function addImage(products) {
  return products.map(product => ({ ...product, image: `${IMAGE_URL}/${product.brand}.jpg` }))
}