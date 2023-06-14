import { StyledButton } from './style';

type Props = {
  children: string;
};

const Button = ({ children }: Props) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
