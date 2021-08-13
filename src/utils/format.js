export function priceFormat(price) {
  if (isNaN(Number(price))) {
    console.error('price only number')
    return;
  }

  let result = '';
  let count = 0;

  while (price > 0) {
    const num = price % 10;
    price = Math.floor(price / 10);
    result = String(num) + result;
    count++;

    if (count === 3 && price > 0) {
      count = 0;
      result = ',' + result;
    }
  }

  return result;
}