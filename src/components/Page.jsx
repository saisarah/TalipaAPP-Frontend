import { useAppContext } from "@/contexts/AppContext";
import { useNavigationType } from "react-router-dom";

export default function Page({ children, className = "", ...props }) {
  const { viewport } = useAppContext();
  const type = useNavigationType();
  const animation =
    type === "POP" ? "animate-slide-right" : "animate-slide-left";

  if (viewport.isMedium)
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );

  return (
    <div className={`min-h-screen ${animation} ${className}`} {...props}>
      {children}
    </div>
  );
}
