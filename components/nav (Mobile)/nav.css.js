import styled from "styled-components";

const NavMobilestyle = styled.nav`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  width: "100%";
  min-height: "100px";
  border-radius: var(--radius);
  background-color: #fff;
  border-left: 1px solid var(--border-clr);
  .nav-button {
    width: 100%;
  }
`;

export default NavMobilestyle;
