import styled from "styled-components";

const Navstyle = styled.nav`
    position: absolute;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
    padding: 0 .5rem;
    border: 1px solid var(--footer-gray);
    .tools-panel {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        .drawing-tool{
            width: 150px;
            height: 80%;
            padding: 0.5rem;
            border: 1px solid var(--footer-gray);
            border-radius: 3px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: 1rem;
        }
        .adjusment-tool{
            width: 150px;
            height: 80%;
            padding: 0.5rem;
            border: 1px solid var(--footer-gray);
            border-radius: 3px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            div {
                input[type=number] {
                    width: 60px;
                     padding: 0.2rem 0.3rem;
                }
            }
        }
    }
`;

export default Navstyle;