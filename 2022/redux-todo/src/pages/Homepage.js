import Heading from "../components/Heading";
import { useSelector } from "react-redux";

export default function HomePage() {
  const theme = useSelector((state) => state.theme.dark);
  console.log(theme);
  return (
    <Heading level={1} color={`${theme ? "white" : "#1a1a1a"}`}>
      Home
    </Heading>
  );
}
