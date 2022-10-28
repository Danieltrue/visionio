import NavButtonStyle from "./nav-button.css";
import { BsChevronExpand } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { activateMobileNav } from "../../redux/action/features.action";

const NavButton = () => {
  const dispatch = useDispatch();
  const { activatedMobileNav } = useSelector(
    (state) => state.rootReducer.activateMobileNavReducer
  );

  return (
    <NavButtonStyle className="nav-button center">
      <button
        className="button-close-open"
        onClick={(e) => dispatch(activateMobileNav(!activatedMobileNav))}
      >
        <BsChevronExpand />
      </button>
    </NavButtonStyle>
  );
};

export default NavButton;
