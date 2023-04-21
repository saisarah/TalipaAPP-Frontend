import { LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { Button, Carousel } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

export const GroupPostCard = ({ author, created_at, description, id, image_urls, likers }) => {
  return (
    <div className="border-y border-slate-300 bg-white p-3 pb-0 sm:border-x">
      <div className="flex">
        <img
          className="aspect-square w-10 rounded-full"
          src={author.profile_picture}
        />
        <div className="ml-3">
          <div className="text-sm font-bold">{author.fullname}</div>
          <div className="text-xs text-slate-500">
            {moment(created_at).fromNow()}
          </div>
        </div>
      </div>
      <div className="border-b border-slate-200 py-3 text-sm">
        <div>{description}</div>
        {image_urls.length > 0 && (
          <Carousel className="-mx-3">
             {image_urls.map(image => (
              <div key={image}>
                <img className="w-full aspect-video" src={image} key={image}/>
              </div>
            ))}            
          </Carousel>
        )}
        {likers.length > 0 &&
          <div className="mt-3">{likers.length} likes</div>
        }
      </div>
      <div>
        <Button size="large" type="link" icon={<LikeOutlined />} />
        <Link to={`/farmer/groups/posts/${id}`}>
          <Button size="large" type="link" icon={<MessageOutlined />} />
        </Link>
      </div>
    </div>
  );
};
