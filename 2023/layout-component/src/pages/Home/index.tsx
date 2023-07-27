import { useState } from "react";
import { ButtonGroup, GridAutoFill, GridAutoFit } from "./style";
import SmallBox from "../../components/box/small";
import MediumBox from "../../components/box/medium";
import LargeBox from "../../components/box/large";

export default function Home() {
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
    <>
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
    </>
  );
}
