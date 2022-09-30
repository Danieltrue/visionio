import Button from "../../components/button-tran/button";
import Startstyle from "./start.css";
import Link from "next/link";

const Start = () => {
  return (
    <Startstyle>
      <Button
        text={"New Sketch"}
        icon={"bx bx-plus"}
        link={"/drawers/drawer"}
      />
    </Startstyle>
  );
};

export default Start;
