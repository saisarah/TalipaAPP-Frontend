import { NavLink, useSearchParams } from "react-router-dom";

export default function TabLink({ tab, text, className, activeClassName }) {
  const [params] = useSearchParams();
  const isActive = params.get("tab") === tab;
  return (
    <NavLink
      to={`?tab=${tab}`}
      replace
      className={`${className} ${isActive ? activeClassName : ""}`}
    >
      {text || tab}
    </NavLink>
  );
}
