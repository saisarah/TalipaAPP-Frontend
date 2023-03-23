import { useHistoryStack } from "@/helpers/hooks";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";


export function BackLink({ to, onBack }) {
  const navigate = useNavigate();
  const historyStack = useHistoryStack();

  const handleClick = () => {

    if (onBack) {
      onBack()
      return;
    }

    if (historyStack.length > 0) {
      navigate(-1);
      return;
    }
    navigate(to, { replace: true });
  };

  return (
    <Button
      onClick={handleClick}
      type="link"
      className="text-black"
      icon={<ArrowLeftOutlined style={{ fontSize: "16px" }} />}
    />
  );
}