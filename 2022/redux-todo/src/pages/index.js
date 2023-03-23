import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";

const ContentWrapper = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
`;
const Container = styled.div`
  height: 100vh;
`;
function Navbar() {
  return (
    <Container>
      <Topbar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </Container>
  );
}

export default Navbar;
