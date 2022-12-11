export default function GroupItem({ name, membersCount, type }) {
  return (
    <div className="flex gap-4 bg-white p-4">
      <div className="h-[72px] w-[72px] flex-shrink-0 rounded bg-slate-300"></div>
      <div className="flex flex-grow flex-col">
        <span className="font-bold">{name}</span>
        <span>{type}</span>
        <span className="text-slate-500">{membersCount} Members</span>
      </div>
    </div>
  );
}
