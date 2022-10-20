import styled from "styled-components";

const Navstyle = styled.nav`
  position: absolute;
  right: ${(props) => (props.mobile ? 0 : 0)};
  left: ${(props) => (props.mobile ? 0 : null)};
  bottom: ${(props) => (props.mobile ? 0 : null)};
  width: ${(props) => (props.mobile ? "100%" : "270px")};
  min-height: ${(props) => (props.mobile ? "100px" : "100vh")};
  border-radius: var(--radius);
  background-color: #fff;
  border-left: 1px solid var(--border-clr);
  .nav-button {
    width: 100%;
  }
`;

export default Navstyle;
