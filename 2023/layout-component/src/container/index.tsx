import { useState } from "react";
import MediumBox from "../components/box/medium";
import SmallBox from "../components/box/small";
import { ButtonGroup, Container, GridAutoFill, GridAutoFit } from "./style";
import LargeBox from "../components/box/large";

export default function Layout() {
  const [list, setList] = useState<React.ReactNode[]>([]);

  const SmallAdd = () => {
    setList((prev) => {
      return [...prev, <SmallBox key={list.length + 1} />];
    });
  };

  const MediumAdd = () => {
    setList((prev) => {
      return [...prev, <MediumBox key={list.length + 1} />];
    });
  };

  const LargeAdd = () => {
    setList((prev) => {
      return [...prev, <LargeBox key={list.length + 1} />];
    });
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <ButtonGroup>
          <button onClick={SmallAdd}>button 1</button>
          <button onClick={MediumAdd}>button 2</button>
          <button onClick={LargeAdd}>button 3</button>
        </ButtonGroup>
        <h2>Auto Fit</h2>
        <GridAutoFit>{list.map((item) => item)}</GridAutoFit>
        <hr />
        <h2>Auto Fill</h2>
        <GridAutoFill>{list.map((item) => item)}</GridAutoFill>
      </Container>
    </div>
  );
}
