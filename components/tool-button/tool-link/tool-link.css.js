import styled from "styled-components";

const ToolLinkStyle = styled.button`
  height: 100%;
  width: 50px;
  border: 0;
  background: transparent;
  & > * {
    color: var(--outline-clr);
    transform: scale(1.2);
  }
  &.active:hover {
    background-color: var(--button-clr);
    border: 1px solid var(--button-clr);
  }
`;

export default ToolLinkStyle;
