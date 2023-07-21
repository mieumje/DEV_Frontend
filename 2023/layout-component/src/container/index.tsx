import MediumBox from "../components/box/medium";
import SmallBox from "../components/box/small";
import { ButtonGroup, ComponentGroup, Container } from "./style";

export default function Layout() {
  return (
    <Container>
      <ButtonGroup>
        <button>button 1</button>
        <button>button 2</button>
        <button>button 3</button>
      </ButtonGroup>
      <ComponentGroup>
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <MediumBox />
        <SmallBox />
        <MediumBox />
        <MediumBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
        <SmallBox />
      </ComponentGroup>
    </Container>
  );
}
