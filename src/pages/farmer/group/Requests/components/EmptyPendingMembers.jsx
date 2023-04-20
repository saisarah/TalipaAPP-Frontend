import emptyMembers from "./emptyMembers.svg";

export const EmptyPendingMembers = () => {
  return (
    <div className="mt-10 grid justify-center text-center">
      <div>
        <img src={emptyMembers} alt="" className="h-[200px] w-auto" />
      </div>
      <div className="text-lg  text-slate-500">No pending member request</div>
    </div>
  );
};
