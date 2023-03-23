export default function toggleTodo({ userId, id, title, completed }) {
  return {
    type: "TOGGLE_TODO",
    payload: {
      userId,
      id,
      title,
      completed,
    },
  };
}
