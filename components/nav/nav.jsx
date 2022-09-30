import Toolbutton from "../tool-button/tool-button";
import Navstyle from "./nav.css";

const Nav = () => {
  return (
    <Navstyle>
      <div className="logo">
        <p>Visionio</p>
      </div>
      <div className="tools">
        <div className="drawer-tools">
          <Toolbutton icono={"bx bx-pencil"} />
        </div>
      </div>
    </Navstyle>
  );
};

export default Nav;