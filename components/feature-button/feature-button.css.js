import styled from "styled-components";

const FeatureButtonStyle = styled.button`
   width: 40px;
   border: 0;
   background: transparent;
   padding: 0.4rem 0.3rem;
   border: 1px solid transparent;
   &:hover {
        border: 1px solid var(--border-clr);
    }
    border-radius: var(--radius);

   & > * {
    transform: scale(1.5);
}
    &.active {
        background-color: #0099ee;
        border: 1px solid #0099ee;
        & > * {
            color: #fff;
        }
    }
`;

export default FeatureButtonStyle