export function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export class ArrayStorage {
  constructor(keyName) {
    this.keyName = keyName;

    const loaded = getItem(this.keyName) ?? [];

    if (!Array.isArray(loaded)) {
      console.error('only array');
      return;
    }

    this.list = loaded;
  }

  save() {
    setItem(this.keyName, this.list);
  }

  push(item) {
    if (!this.list) {
      console.error('check your array storage list');
      return;
    }

    this.list.push(item);
    this.save();
  }

  includes(item) {
    if (!this.list) {
      console.error('check your array storage list');
      return;
    }

    return this.list.some(v => v.id === item.id);
  }
}
