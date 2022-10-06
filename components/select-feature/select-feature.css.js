import styled from "styled-components";

const SelectFeatureStyle = styled.select`
    border: 1px solid transparent;
    width: 50;
    border-radius: var(--radius);
    transition: width .2s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
        width: 70px;
        border: 1px solid var(--border-clr);
    }
    &:focus {
        outline: none;
    }
    color: var(--font-clr-02);
    font-family: var(--font-sans);
    font-size: 12px;
`;

export default SelectFeatureStyle;