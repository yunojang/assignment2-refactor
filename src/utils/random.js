export function getRandomItem(arr) {
  if (!Array.isArray(arr)) {
    console.error('only array');
    return;
  }
  
  const index = Math.floor(Math.random() * arr.length);

  return arr[index];
}