import styled from "styled-components";

const NumberInputStyle = styled.input`
    border: 2px solid transparent;
    &:focus {
        outline: none;
    }
    &:hover {
        border: 1px solid var(--border-clr);
    }
    width: 60px;
    height: 20px;
    padding: 0.9rem 0.4rem;
    font-family: var(--font-sans);
    font-size: 80%;
    border: 0;
    color: var(--font-clr);
    border-radius:var(--radius) ;
`;


export default NumberInputStyle