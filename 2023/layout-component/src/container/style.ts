import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  min-height: 50px;
`;

export const ComponentGroup = styled.div`
  display: grid;
  gap: 1rem;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  /* grid-template-rows: repeat(auto-fit, minmax(20%, 100%)); */
  grid-auto-rows: min-content;
`;
