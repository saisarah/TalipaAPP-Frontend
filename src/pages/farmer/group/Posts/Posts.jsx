import Http from "@/helpers/Http";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";

const fetchGroupPosts = async () => {
  const { data } = await Http.get("/farmer-group/posts");
  return data;
};

const useGroupPostsQuery = () => {
  return useQuery(["farmer-group", "posts"], fetchGroupPosts);
};

const GroupPostCard = ({ post }) => {
  return (
    <div className="mt-3 border-y border-slate-300 bg-white p-3 pb-0">
      <div className="flex">
        <img
          className="aspect-square w-10 rounded-full"
          src={
            "https://res.cloudinary.com/djasbri35/image/upload/v1652630937/alspace/avatar/aqimrjzjjaylycobq9sr.jpg"
          }
        />
        <div className="ml-3">
          <div className="text-sm font-bold">Lenard Mangay-ayam</div>
          <div className="text-xs text-slate-500">2 mins ago</div>
        </div>
      </div>
      <div className="border-b border-slate-400 py-3 text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi labore
        rem magni ut quis. Voluptas neque perferendis beatae doloribus dolorem
        veritatis, soluta maxime, repudiandae sed distinctio amet facilis?
        Aliquam, incidunt?
        <div className="mt-3">5 likes</div>
      </div>
      <div>
        <Button size="large" type="link" icon={<LikeOutlined />} />
        <Button size="large" type="link" icon={<MessageOutlined />} />
      </div>
    </div>
  );
};

export default function Posts() {
  const { data } = useCurrentUserQuery();
  const { data: posts, isLoading } = useGroupPostsQuery();

  return (
    <>
      <div className="mt-3 flex bg-white p-3">
        <img
          className="aspect-square w-10 rounded-full"
          src={data.profile_picture}
        />
        <div className="ml-3 flex flex-grow items-center rounded-3xl border border-slate-300 px-4">
          Write something...
        </div>
      </div>
      <GroupPostCard />
      <GroupPostCard />
      <GroupPostCard />
    </>
  );
}
