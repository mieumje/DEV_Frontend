const addPost = (userId, title, body) => {
  return {
    type: "ADD_POST",
    payload: {
      userId,
      title,
      body,
    },
  };
};

export default addPost;
