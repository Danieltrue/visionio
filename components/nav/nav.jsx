import Navstyle from "./nav.css";

const Nav = () => {
  return (
    <Navstyle>
      <div className="drawing-tool">
        <button onClick={(e) => alert("da")}>
          <i className="bx bx-pencil"></i>a
        </button>
      </div>
    </Navstyle>
  );
};
export default Nav;
