import styled from "styled-components";

const Toolbuttonstyle = styled.div`
    font-family: var(--font-sans);
    button {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        flex-direction: column;
        display: flex;
        align-items: center;
        font-size: 19px;
        border: 0;
        background-color: transparent;
        color: var(--gray);
    }
    p {
        font-size: 12px;
        margin-top: 6px;
    }
`;

export default Toolbuttonstyle