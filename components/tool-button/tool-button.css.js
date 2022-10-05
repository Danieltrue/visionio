import styled from "styled-components";

const ToolButtonStyle = styled.button`
    
    padding: 0.3rem 0.4rem;
    border: 1px solid #aaaaaa;
    background-color: transparent;
    & > * {
            color: #aaaaaa;
        }

    &.active {
        background-color: #0099ee;
        border: 1px solid #0099ee;
        & > * {
            color: #fff;
        }
    }
`;

export default ToolButtonStyle