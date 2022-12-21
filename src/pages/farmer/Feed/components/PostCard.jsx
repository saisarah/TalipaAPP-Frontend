import { Avatar, Carousel, Image, Typography } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import config from "../../../../config";
import useCropsQuery, {
  useCrop,
} from "../../../../query/queries/useCropsQuery";
import MapPinOutline from "@/icons/heroicons/MapPinOutline.jsx";
import { currency } from "@/helpers/utils";

export const PostCardImage = ({ attachments }) => {
  return (
    <Carousel>
      {attachments.map((attachment) => (
        <div className="relative aspect-square w-full" key={attachment.id}>
          <Image
            className="object-cover"
            width="100%"
            height="100%"
            preview={{ visible: false }}
            src={attachment.source}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default function PostCard({
  crop_id,
  author,
  id,
  created_at,
  caption,
  attachments,
  display_price
}) {
  // console.log(props);
  const crop = useCrop(crop_id);

  return (
    <div className="flex flex-col break-inside-avoid	 border border-slate-200 bg-white shadow-sm h-full mb-2">
      {/* <PostCardImage attachments={attachments} /> */}
      <Image
        className="aspect-square object-cover"
        width="100%"
        height="100%"
        src={attachments[0].source}
      />
      <div className="flex flex-col p-2">
        <div className="text-xs text-slate-600">{crop?.name}</div>
        <div className="text-xl font-semibold">{caption}</div>
        <span className="text-base font-medium text-primary">{currency(display_price)}</span>

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

  return (
    <div className="border-y border-slate-200 bg-white p-4">
      <div className="flex items-center gap-4">
        {/* <img className="h-12 w-12 rounded-full" src={null} /> */}
        <Avatar size="large" />
        <div className="flex flex-grow flex-col">
          <span className="font-bold">
            {author.firstname} {author.lastname}
          </span>
          <span className="text-xs">Posted {moment(created_at).fromNow()}</span>
        </div>
      </div>

      <p className="whitespace-pre-line py-2">{caption}</p>

      <div className="-mx-4">
        <img className=" aspect-square w-full" src={attachments[0].source} />
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
