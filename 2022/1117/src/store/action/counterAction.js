const counterPlusAction = (count = 1, type) => {
  return {
    type,
    count,
  };
};

export default counterPlusAction;
