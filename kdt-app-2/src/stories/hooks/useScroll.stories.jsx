import styled from "@emotion/styled";
import useScroll from "../../hooks/useScroll";

export default {
  title: 'Hooks/useScroll',
};

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  overflow: auto;
`;

const Inner = styled.div`
  width: 100000px;
  height: 100000px;
  background-image: linear-gradient(100deg, #000 0%, #fff 100%);
`;

export const Default = () => {
  const [ref, coord] = useScroll();
  return (
    <>
      <Box ref={ref}>
        <Inner />
      </Box>
      <button onClick={() => {
        ref.current.scrollTo({ top: 20000, left: 20000, behavior: 'smooth'});
      }}>
        Scroll
      </button>
      {coord.x}, {coord.y}
    </>
  );
};