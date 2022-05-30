import styled from '@emotion/styled';

const BadgeContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Supper = styled.sup`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 8px;
  font-size: 12px;
  border-radius: 20px;
  color: white;
  background-color: #f44;
  transform: translate(50%, -50%);
`

const Badge = ({ children, count, ...props}) => {
  return (
    <BadgeContainer>
      {children}
      <Supper>{count}</Supper>
    </BadgeContainer>
  )
};

export default Badge;