const counterInitAction = (count = 0) => {
  return {
    type: "INIT",
    count,
  };
};

export default counterInitAction;
