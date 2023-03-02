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

export const TabLinks = ({
  tabs,
  className,
  defaultClassName,
  activeClassName,
}) => {
  return (
    <div className={className}>
      {tabs.map((tab) => (
        <TabLink
          key={tab.key}
          tab={tab.key}
          text={tab.title}
          className={defaultClassName}
          activeClassName={activeClassName}
        />
      ))}
    </div>
  );
};
