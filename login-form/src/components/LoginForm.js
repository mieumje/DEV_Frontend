import Input from "./Input";

const LoginForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" />
      <button type="submit">Login</button>
    </form>
  )
};

export default LoginForm;