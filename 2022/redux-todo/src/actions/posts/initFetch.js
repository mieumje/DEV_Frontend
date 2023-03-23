const initFetch = (payload) => {
  return {
    type: "FETCH_POSTS",
    payload,
  };
};

export default initFetch;
