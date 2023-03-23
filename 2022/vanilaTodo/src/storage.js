const storage = window.localStorage;

export const setItem = (key, value) => {
  try {
    storage.setItem(key, value);
  } catch (e) {
    console.error(e.message);
  }
};

export const getItem = (key, defaultValue) => {
  try {
    const storedValue = storage.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    }
  } catch (e) {
    console.error(e);
    return defaultValue;
  }
};
