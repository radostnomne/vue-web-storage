export default {
  storage: {},
  setItem(key, value) {
    this.storage[key] = value;
  },
  getItem(key) {
    return this.storage[key];
  },
  clear() {
    this.storage = {};
  },
  removeItem(key) {
    delete this.storage[key];
  },
  get length() {
    return Object.keys(this.storage).length;
  }
};