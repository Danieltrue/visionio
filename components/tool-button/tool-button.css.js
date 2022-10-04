import styled from "styled-components";

const ToolButtonStyle = styled.button`
    
    padding: 0.2rem 0.3rem;

    &.active {
        background-color: #0099ee;
        border: 1px solid #0099ee;
        & > * {
            color: #fff;
        }
    }
`;

export default ToolButtonStyle