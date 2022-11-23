const storage = window.localStorage;

const setItem = (key, value) => {
  try {
    console.log(value);
    storage.setItem(key, JSON.stringify(value));
  } catch (e) {
    throw new Error("localStorage setItem is fail");
  }
};

const getItem = (key, initialState = {}) => {
  try {
    const storedValue = storage.getItem(key);
    console.log(storedValue);

    if (!storedValue) {
      return initialState;
    }
    return JSON.parse(storedValue);
  } catch (e) {
    console.error("localStorage getItem is fail");
    return initialState;
  }
};

export { setItem, getItem };
