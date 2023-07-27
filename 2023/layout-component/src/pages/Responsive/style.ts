import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-auto-flow: row dense;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media screen and (min-width: 780px) {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  min-height: 50px;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;

  @media screen and (min-width: 576px) {
    grid-column: span 4;
  }

  @media screen and (min-width: 780px) {
    grid-column: span 4;
  }

  @media screen and (min-width: 1024px) {
    grid-column: span 3;
  }
`;

export const SecondRows = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;

  @media screen and (min-width: 576px) {
    grid-column: span 4;
  }

  @media screen and (min-width: 780px) {
    grid-column: span 4;
  }

  @media screen and (min-width: 1024px) {
    grid-column: span 3;
  }
`;
