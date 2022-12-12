import { Link } from "react-router-dom";

export default function GroupItem({ id, name, membersCount, type }) {
  return (
    <div className="flex gap-4 bg-white p-4">
      <div className="h-[72px] w-[72px] flex-shrink-0 rounded bg-slate-300"></div>
      <div className="flex flex-grow flex-col">
        <Link to={`/farmer/groups/${id}`} className="font-bold">
          {name}
        </Link>
        <span>{type}</span>
        <span className="text-slate-500">{membersCount} Members</span>
      </div>
    </div>
  );
}
