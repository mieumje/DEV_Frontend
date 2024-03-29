import styled from "@emotion/styled";

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  min-height: 50px;
`;

export const GridAutoFit = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  grid-auto-rows: auto;
  grid-auto-flow: row dense;
`;

export const GridAutoFill = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  grid-auto-rows: auto;
  grid-auto-flow: row dense;
`;
