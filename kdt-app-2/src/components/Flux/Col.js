import styled from "@emotion/styled";

const StyledCol = styled.div`
  max-width: 100% fit-content;
  box-sizing: border-box;

  width: ${({span}) => span && `${(span / 12) * 100}%`};
  margin-left: ${({offset}) => offset && `${(offset / 12) * 100}%`};
`;

const Col = ({ children, span, offset, ...props}) => {
  return (
    <StyledCol {...props} span={span} offset={offset}>
      {children}
    </StyledCol>
  )
};

export default Col;