import emptyPost from "../images/emptyPost.svg";

export default function EmptyGroupPosts() {
  return (
    <div className="mt-10 grid justify-center text-center">
      <div>
        <img src={emptyPost} alt="" className="h-[200px] w-auto" />
      </div>
      <div className="text-lg  text-slate-500">Be the first to posts</div>
    </div>
  );
}
