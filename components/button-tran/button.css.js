import styled from "styled-components";

const Buttonstyle = styled.button`
    font-family:var(--font-sans) ;
    background-color:transparent ;
    padding: 12px 12px;
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 4px;
    font-weight: 500;
    border: 1px solid var(--gray);
    transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    i {
        font-weight:bold;
        margin-left: 6px;
        vertical-align: middle;
        margin-top: 2px;
    }
    &:hover {
        background-color: var(--hoverbkclr);
        color: var(--hoverclr);
    }
`;

export default Buttonstyle;