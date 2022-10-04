import styled from "styled-components";

const Navstyle = styled.nav`
    position: absolute;
    right: 0;
    width: 300px;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
    background-color: #fff;
    border-left: 1px solid var(--footer-gray);
    .tools-panel{
        height: 100vh;
        width: 100%;
    }
    .drawing-tool{
        width: 100%;
        padding: 18px;
        border-bottom: 1px solid var(--footer-gray);
   }
   .adjusment-tool {
    padding: 18px 18px;
    p {
        font-size: 12px;
        font-weight: 700;
        color: #aaa;
    }
    .tools {
        margin: 18px 0;
        display: flex;
        .color {
            border: 1px solid var(--footer-gray);
            border-radius: 3px;
            width: 100px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            font-size: 90%;
            padding: 0.3rem;
            .color-inner {
                background-color: red;
                height: 30px;
                width: 30px;
                border-radius: 3px;
            }
            p {
                text-transform: uppercase;
                font-weight: 100;
                letter-spacing: 1px;
                margin-left: 6px;
            }
        }
    }
   }
`;

export default Navstyle;