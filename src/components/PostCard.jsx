import { Image } from "antd";
import { useCrop } from "../query/queries/useCropsQuery";
import MapPinOutline from "@/icons/heroicons/MapPinOutline.jsx";
import { currency } from "@/helpers/utils";
import { Link } from "react-router-dom";

export default function PostCard({ post, to }) {
  const {
    crop_id,
    author,
    id,
    created_at,
    caption,
    attachments,
    display_price,
  } = post;
  const crop = useCrop(crop_id);

  return (
    <div className="mb-2 flex h-full	 break-inside-avoid flex-col border border-slate-200 bg-white shadow-sm">
      <Image
        className="aspect-square object-cover"
        width="100%"
        height="100%"
        src={attachments[0].source}
      />
      <div className="flex flex-col p-2">
        <div className="text-xs text-slate-600">{crop?.name}</div>
        <Link to={to} className="text-xl font-semibold">
          {caption}
        </Link>
        <span className="text-base font-medium text-primary">
          {currency(display_price)}
        </span>

        <div className="mt-2 flex items-center gap-2 overflow-hidden overflow-ellipsis text-xs text-slate-400">
          Seller: {author.firstname} {author.lastname}
        </div>

        <div className="mt-2 flex items-center gap-2 overflow-hidden overflow-ellipsis text-xs text-slate-400">
          <MapPinOutline />
          <span className=" whitespace-nowrap ">
            Sta. Rosa City, Laguna hkkn
          </span>
        </div>
      </div>
    </div>
  );
}
