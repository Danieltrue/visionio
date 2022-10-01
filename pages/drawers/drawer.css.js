import styled from "styled-components";

const Drawerstyle = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    pointer-events: none;
    section.drawing-canvas {
        pointer-events: none;
        flex: 1;
        width: 100%;
        // border: 1px solid var(--footer-gray);
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;      
    }
`;

export default Drawerstyle