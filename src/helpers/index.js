export const getLocalStorage = (key) => localStorage.getItem(key);

export const updateLocalStorage = (key, state) =>
  localStorage.setItem(key, JSON.stringify(state));
