import Button from "../../components/button-tran/button";
import Startstyle from "./start.css";

const Start = () => {
  return (
    <Startstyle>
      <Button text={"New Sketch"} icon={"bx bx-plus"} link={"/drawer/drawer"} />
    </Startstyle>
  );
};

export default Start;
