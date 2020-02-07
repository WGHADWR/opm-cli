
export const LocalStorage = {

  set(key: string, value: any) {
    if (typeof value !== 'string') {
      // eslint-disable-next-line no-param-reassign
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  },
  get(key: string) {
    return localStorage.getItem(key);
  },

  remove(key: string) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  },

};
