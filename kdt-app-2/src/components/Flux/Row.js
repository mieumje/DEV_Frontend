import styled from '@emotion/styled';

const AlignToCSSValue = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end'
};

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;

  justify-content: ${({justify}) => justify};
  align-items: ${({align}) => AlignToCSSValue[align]};
`;



const Row = ({ children, justify, align, ...props}) => {
  return (
    <StyledRow {...props} align={align} justify={justify}>
      {children}
    </StyledRow>
  )
};

export default Row;