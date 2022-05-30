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

const Badge = ({ 
  children, 
  count, 
  maxCount,
  showZero, 
  backgroundColor, 
  textColor, 
  ...props
}) => {
  const colorStyle = {
    backgroundColor,
    color: textColor
  };

  return (
    <BadgeContainer>
      {children}
      {count > 0 || (count === 0 && showZero) ? (
        <Supper style={colorStyle}>
          {maxCount && count > maxCount ? `${maxCount}+` : `${count}`}
        </Supper>
        ) : null
      }
    </BadgeContainer>
  )
};

export default Badge;