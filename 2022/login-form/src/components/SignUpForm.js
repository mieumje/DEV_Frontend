import useForm from "../hooks/useForm";
import Button from "./Button";
import ErrorText from "./ErrorText";
import Input from "./Input";
import CardForm from "./CardForm";
import Title from "./Title";

const SignUpForm = ({ onSubmit }) => {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit,
    validate: ({ name, password, passwordConfirm}) => {
      const newErrors = {};
      if (!name) newErrors.name = '이름을 입력해주세요.';
      if (!password) newErrors.password = '비밀번호를 입력해주세요.';
      if (password !== passwordConfirm) newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
      return newErrors;
    }
  });

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>Sign Up</Title>
      <Input 
        type="text" 
        name="name" 
        placeholder="name"
        onChange={handleChange}/>
      {errors && errors.name && <ErrorText>{errors.name}</ErrorText>}
      <Input 
        type="password" 
        name="password" 
        placeholder="password" 
        style={{ marginTop: 16 }}
        onChange={handleChange}/>
      {errors && errors.password && <ErrorText>{errors.password}</ErrorText>}
      <Input 
        type="password" 
        name="passwordConfirm" 
        placeholder="password confirm" 
        style={{ marginTop: 16 }}
        onChange={handleChange}/>
      {errors && errors.passwordConfirm && <ErrorText>{errors.passwordConfirm}</ErrorText>}
      <Button type="submit" disabled={isLoading} style={{ marginTop : 16 }}>Sign up</Button>
    </CardForm>
  )
};

export default SignUpForm;