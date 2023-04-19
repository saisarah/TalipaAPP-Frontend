import { Link } from "react-router-dom";

export default function GroupItem({ id, name, members_count, type }) {
  return (
    <div>
      <div className="flex gap-4 bg-white p-4 py-2">
        <div className="h-[72px] w-[72px] flex-shrink-0 rounded bg-slate-300"></div>
        <div className="flex flex-grow flex-col">
          <Link to={`/farmer/groups/${id}`} className="font-bold">
            {name}
          </Link>
          <span>{type}</span>
          <span className="text-slate-500">{members_count} Members</span>
        </div>
      </div>
      <div className="mx-4 h-[1px] bg-slate-100"></div>
    </div>
  );
}
