import { styled } from "styled-components";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <StyledContainer>
      <Navbar />
      <Outlet />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  min-height: 100dvh;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
