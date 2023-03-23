import { useHistoryStack } from "@/helpers/hooks";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function PageHeader({ title, left, back, onBack }) {
  return (
    <div className="sticky top-0 z-10 grid h-16 flex-shrink-0 grid-cols-12 items-center bg-white px-4 shadow-sm">
      <div className="col-span-2">{back ? <BackLink to={back} onBack={onBack} /> : left}</div>
      <div className="col-span-8 text-center">
        <span className="text-2xl font-bold">{title}</span>
      </div>
    </div>
  );
}

function BackLink({ to, onBack }) {
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
