import { useHistoryStack } from "@/helpers/hooks";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function PageHeader({ title, left, back }) {
  return (
    <div className="sticky top-0 z-10 grid h-16 grid-cols-12 items-center bg-white px-4 shadow-sm">
      <div className="col-span-2">
        {Boolean(back) ? <BackLink to={back} /> : left}
      </div>
      <div className="col-span-8 text-center">
        <span className="text-2xl font-bold">{title}</span>
      </div>
    </div>
  );
}

function BackLink({ to }) {
  const navigate = useNavigate();
  const historyStack = useHistoryStack();

  const handleClick = () => {
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
      icon={<ArrowLeftOutlined style={{ fontSize: "16px" }} />}
    />
  );
}
