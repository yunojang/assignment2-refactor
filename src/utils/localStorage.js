export function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setItem(key,value) {
  localStorage.setItem(key,JSON.stringify(value));
}

export class ArrayStorage {
  constructor(keyName) {
    this.keyName = keyName;
  }

  push(item) {
    const loaded = getItem(this.keyName) ?? [];
    
    if (Array.isArray(loaded)) {
      console.log('can push on only array');
      return;
    }

    loaded.push(item);
    setItem(this.keyName,loaded);
  }
}
