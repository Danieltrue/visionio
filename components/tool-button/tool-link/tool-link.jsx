import Link from "next/link";
import ToolLinkStyle from "./tool-link.css";

const ToolLink = ({ icon, hover, ...props }) => {
  return (
    <Link href={"/"}>
      <ToolLinkStyle className={hover ? "active" : ""} {...props}>
        {icon}
      </ToolLinkStyle>
    </Link>
  );
};

export default ToolLink;
