import { Outlet } from "react-router";
import { Container } from "./style";

export default function Layout() {
  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Outlet />
      </Container>
    </main>
  );
}
