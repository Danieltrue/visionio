import styled from "styled-components";

const Colorstyle = styled.div`
    position: relative;
    &:hover {
        border: 1px solid var(--border-clr);
    }
    cursor: pointer;
    transition: all .5s cubic-bezier(0.23, 1, 0.320, 1);
    border: 1px solid transparent;
    border-radius: var(--radius);
    display: flex;
    width: 50%;
    align-items: center;
    font-size: 75%;
    padding: 0.4rem 0.3rem;
    font-family: var(--font-sans);
    .color-inner {
        height: 15px;
        width: 15px;
        background-color: #000;
        border-radius: var(--radius);
        outline: none;
    }
    p {
        text-transform: uppercase;
        margin-left: var(--pixel);
    }
    .color-holder{
        position: absolute;
        top: 10%;
        left: -220%;
        height: 230px;
        width: 230px;
        background-color: var(--outline-clr);
        border-radius: var(--radius);
        border: 1px solid var(--border-clr);
    }
`;

export default Colorstyle;