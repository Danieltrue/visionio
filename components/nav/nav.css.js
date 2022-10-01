import styled from "styled-components";

const Navstyle = styled.nav`
    padding: 18px 0;
    display: flex;
    justify-content:space-between;
    align-items: center;
    background: #fff;
    .logo {
        p {
            font-weight: 500;
        }
    }
    .drawer-tools {
       display: flex;
       justify-content: space-between;
       width: 100px;
       min-height: 20px;
       color: #555;
       background-color: #eee;
       padding: 1rem 0;
       align-items: center;
       padding: 6px 6px;
       border-radius: 4px;
    }
`;

export default Navstyle