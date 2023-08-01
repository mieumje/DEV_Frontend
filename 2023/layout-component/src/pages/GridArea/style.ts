import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: auto 2fr auto;
  grid-template-columns: 0 1fr 1fr;
  grid-template-areas:
    "header header header"
    "main main main"
    "footer footer footer";

  @media screen and (min-width: 576px) {
    grid-template-rows: auto 2fr auto;
    grid-template-columns: 0.5fr 1fr 1fr;
    grid-template-areas:
      "header header header"
      "main main main"
      "footer footer footer";
  }

  @media screen and (min-width: 768px) {
    grid-template-rows: auto 2fr auto;
    grid-template-columns: 200px 1fr 1fr;
    grid-template-areas:
      "header header header"
      "slider main main"
      "slider footer footer";
  }

  @media screen and (min-width: 1024px) {
    grid-template-rows: auto 2fr auto;
    grid-template-columns: 250px 1fr 1fr;
    grid-template-areas:
      "header header header"
      "slider main main"
      "slider footer footer";
  }
`;

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid pink;
  color: #fefefe;
  width: 100%;

  text-align: center;
  font-weight: bold;
  grid-column: span 1;
  grid-row: span 3;
  grid-area: slider;
  display: none;

  @media screen and (min-width: 576px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const Header = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid skyblue;
  color: #fefefe;
  padding: 1rem 2rem;

  text-align: center;
  font-weight: bold;
  grid-column: span 3;
  grid-row: span 1;
  grid-area: header;
`;

export const Main = styled.div`
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid springgreen;
  color: #fefefe;
  text-align: center;
  font-weight: bold;
  grid-column: span 2;
  grid-row: span 2;
  grid-area: main;

  display: grid;
  gap: 0.5rem;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media screen and (min-width: 780px) {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  @media screen and (min-width: 780px) {
    grid-column: span 3;
  }

  @media screen and (min-width: 1024px) {
    grid-column: span 2;
  }
`;

export const Footer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid orange;
  color: #fefefe;

  text-align: center;
  font-weight: bold;
  grid-column: span 3;
  grid-row: span 3;
  grid-area: footer;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  height: 100%;
  background-color: #353740;
  color: #d2ffff;
  border-radius: 2rem;
  padding: 1rem;

  @media screen and (min-width: 576px) {
    grid-column: span 4;
  }

  @media screen and (min-width: 780px) {
    grid-column: span 4;
  }

  @media screen and (min-width: 1024px) {
    grid-column: span 4;
  }
`;

export const HeaderButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 100%;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  width: 100%;
  padding: 1rem;

  :hover {
    background-color: #353740;
    cursor: pointer;
  }
`;
