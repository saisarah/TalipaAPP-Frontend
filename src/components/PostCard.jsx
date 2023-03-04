import { currency } from "@/helpers/utils";
import MapPinOutline from "@/icons/heroicons/MapPinOutline.jsx";
import { Link } from "react-router-dom";

export default function PostCard({ post, to }) {
  const { author, title, display_price, crop, thumbnail, location } = post;

  return (
    <div className="mb-2 flex h-full	 break-inside-avoid flex-col border border-slate-200 bg-white shadow-sm">
      <img
        className="aspect-square object-cover"
        width="100%"
        height="100%"
        src={thumbnail.source}
        loading="lazy"
      />
      <div className="flex flex-col p-2">
        <Link to={to} className="text-xl font-semibold leading-6">
          {title}
        </Link>
        <div className="my-1 text-xs text-slate-500">{crop.name}</div>
        <span className="text-base font-medium text-primary">
          {currency(display_price)}
        </span>

        <div className="mt-2 flex items-center gap-2 overflow-hidden overflow-ellipsis text-xs text-slate-400">
          Seller: {author.firstname} {author.lastname}
        </div>

        <div className="mt-2 flex items-center gap-2 overflow-hidden overflow-ellipsis text-xs text-slate-400">
          <MapPinOutline />
          <span className=" whitespace-nowrap ">{location}</span>
        </div>
      </div>
    </div>
  );
}
