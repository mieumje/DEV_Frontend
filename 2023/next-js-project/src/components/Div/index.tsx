import { StyledDiv } from './style';

type Props = {
  children: string;
};

const Div = ({ children }: Props) => {
  return <StyledDiv>{children} hi</StyledDiv>;
};

export default Div;
