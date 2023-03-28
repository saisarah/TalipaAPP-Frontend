import { useHistoryStack } from "@/helpers/hooks";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

export function BackLink({ to, onBack }) {
  const navigate = useNavigate();
  const historyStack = useHistoryStack();

  const handleClick = (e) => {
    if (onBack) {
      e.preventDefault()
      onBack();
      return;
    }

    if (historyStack.length > 0) {
      e.preventDefault()
      navigate(-1);
      return;
    }
  };

  return (
    <Link to={to} replace onClick={handleClick}>
      <Button
        type="link"
        className="text-black"
        icon={<ArrowLeftOutlined style={{ fontSize: "16px" }} />}
      />
    </Link>
  );
}
