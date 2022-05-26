const LoginForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input />
      <button type="submit">Login</button>
    </form>
  )
};

export default LoginForm;