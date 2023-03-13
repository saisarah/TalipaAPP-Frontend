import { useNavigationType } from "react-router-dom";

export default function Page({ children, className = "", ...props }) {
  const type = useNavigationType();
  const animation =
    type === "POP" ? "animate-slide-right" : "animate-slide-left";

  return (
    <div className={`app-size ${animation} ${className}`} {...props}>
      {children}
    </div>
  );
}
