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
    }
    .tools {
        margin: 18px 0;
        display: flex;
        justify-content: space-between ;
        align-items: center;
        input[type=number] {
            width: 60px;
            font-weight: 700;
            height: 46px;
            padding: 0.3rem;
            font-size: 90%;
            border-radius: 2px;
            border: 1px solid var(--footer-gray);
            &:focus {
                outline: none;
            }
        }
        .color {
            border: 1px solid var(--footer-gray);
            border-radius: 2px;
            width: 120px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            font-size: 90%;
            padding: 0.3rem;
            .color-inner {
                height: 35px;
                width: 40px;
                border-radius: 2px;
            }
            p {
                text-transform: uppercase;
                margin-left: 6px;
            }
        }
    }
   }
`;

export default Navstyle;