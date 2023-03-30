import { BackLink } from "./components/BackLink";

export default function PageHeader({ title, left, back, onBack, className='' }) {
  return (
    <div className={`sticky top-0 z-10 grid h-16 flex-shrink-0 grid-cols-12 items-center bg-white px-4 shadow-sm ${className}`}>
      <div className="col-span-2">{back || onBack ? <BackLink to={back} onBack={onBack} /> : left}</div>
      <div className="col-span-8 text-center">
        <span className="text-2xl font-bold">{title}</span>
      </div>
    </div>
  );
}


