import { styled } from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Nav>
      <StyleNavLink to="https://www.housetable.com/">
        <img src="https://assets.website-files.com/61c1f2cd3de869dd6f44cebe/61dd4536f96feb46ea0247c2_Group%201330.svg" />
      </StyleNavLink>
      <StyleNavLink to="/">Home</StyleNavLink>
      <StyleNavLink to="/house">House List</StyleNavLink>
    </Nav>
  );
}
const Nav = styled.nav`
  background-color: white;
  display: flex;
  justify-content: space-around;
  box-shadow: 1px 1px 2px 1px rgba(39, 39, 51, 0.04);
  padding: 1% 0;
`;

const StyleNavLink = styled(Link)`
  color: #93795d;
`;
