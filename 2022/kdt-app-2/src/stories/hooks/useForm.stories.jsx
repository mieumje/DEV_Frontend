import useForm from "../../hooks/useForm";

export default {
  title: 'Hooks/useForm'
};

export const Default = () => {
  const sleep = () => { // 임시 비동기 처리
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  };

  const { isLoading, errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await sleep(); // 임시 비동기 처리
      alert(JSON.stringify(values));
    },
    validate: ({ email, password }) => {
      const errors = {};
      if (!email) errors.email = '이메일을 입력해주세요.';
      if (!password) errors.password = '비밀번호를 입력해주세요.';
      if (!/^.+@.+\..+$/.test(email)) errors.email = "올바른 이메일을 입력해주세요.";
      return errors;
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <div>
        <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
        {errors.email}
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
        {errors.password}
      </div>
      <button type="submit" disabled={isLoading}>{ isLoading ? 'Loading...' : 'Submit'}</button>
    </form>
  );
};