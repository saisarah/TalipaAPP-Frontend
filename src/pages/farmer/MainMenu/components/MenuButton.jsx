import { AntDesignOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const MenuButton = ({ onClick, to, label, src = null }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex aspect-square flex-col items-center justify-center gap-4 p-4 transition duration-300 hover:bg-primary-accent-3 hover:text-white"
    >
      {src === null ? (
        <AntDesignOutlined style={{ fontSize: "48px" }} />
      ) : (
        <img src={src} height="48px" width="48px" />
      )}
      <span>{label}</span>
    </Link>
  );
};
