const initFetch = (payload) => {
  return {
    type: "FETCH_TODOS",
    payload,
  };
};

export default initFetch;
