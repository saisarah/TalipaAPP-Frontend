import { Link } from "react-router-dom";

export default function PostCard({ author, id, image, caption, created_at }) {
  return (
    <div className="border-y border-slate-200 bg-white p-4">
      <div className="flex items-center gap-4">
        <img className="h-12 w-12 rounded-full" src={author.image} />
        <div className="flex flex-grow flex-col">
          <span className="font-bold">{author.name}</span>
          <span className="text-xs">Posted {created_at}</span>
        </div>
      </div>

      <p className="whitespace-pre-line py-2">{caption}</p>

      <div className="-mx-4">
        <img className=" aspect-square w-full" src={image} />
      </div>

      <div className="mt-2 flex">
        <Link
          to={`/farmer/posts/${id}`}
          className="flex-grow rounded-lg bg-slate-300 py-2 text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
