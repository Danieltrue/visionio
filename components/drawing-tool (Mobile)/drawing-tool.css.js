import styled from "styled-components";

const DrawingToolMobileStyle = styled.div`
  height: 100%;
  width: 150px;

  .tools-grided {
    background-color: var(--nav-color);
    height: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100px;
  }
`;

export default DrawingToolMobileStyle;
