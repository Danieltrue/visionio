import styled from "styled-components";

const Colorstyle = styled.div`
            &:hover {
                border: 1px solid var(--border-clr);
            }
            cursor: pointer;
            transition: all .5s cubic-bezier(0.23, 1, 0.320, 1);
            border: 1px solid transparent;
            display: flex;
            width: 40%;
            border-radius: var(--radius);
            align-items: center;
            font-size: 75%;
            padding: 0.3rem 0.3rem;
            font-family: var(--font-sans);
            .color-inner {
                height: 20px;
                width: 20px;
                background-color: #000;
                border-radius: var(--radius);
            }
            p {
                text-transform: uppercase;
                margin-left: var(--pixel);
            }
`;

export default Colorstyle;