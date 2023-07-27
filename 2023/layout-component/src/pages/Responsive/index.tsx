import { useState } from "react";
import { ButtonGroup, Container, FirstRow, SecondRows } from "./style";
import SmallBox from "./small";
import MediumBox from "./medium";
import LargeBox from "./large";

export default function Responsive() {
  const LoremIpsum = [
    {
      title: "What is Lorem Ipsum?",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      title: "Why do we use it?",
      description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    },
    {
      title: "Where does it come from?",
      description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    },
    {
      title: "Where can I get some?",
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
    },
    {
      title: "What is Lorem Ipsum?",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
  ];

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
      <h1>반응형</h1>
      <hr />
      <h1>컨텐츠</h1>
      <Container>
        {LoremIpsum.map((item, index) => {
          return (
            <FirstRow key={index}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </FirstRow>
          );
        })}
      </Container>
      <hr />
      <Container>
        {LoremIpsum.map((item, index) => {
          return (
            <SecondRows key={index}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </SecondRows>
          );
        })}
      </Container>
      <hr />
      <ButtonGroup>
        <button onClick={SmallAdd}>button 1</button>
        <button onClick={MediumAdd}>button 2</button>
        <button onClick={LargeAdd}>button 3</button>
      </ButtonGroup>
      <Container>{list.map((item) => item)}</Container>
      <hr />
      <Container>
        {list.map((_, index) => (
          <SecondRows key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
                fontWeight: "bold",
                height: "100px",
                borderRadius: "1rem",
                backgroundColor: `rgba(127, 17, 224, 1)`,
              }}
            >
              Component {index}
            </div>
          </SecondRows>
        ))}
      </Container>
    </>
  );
}
