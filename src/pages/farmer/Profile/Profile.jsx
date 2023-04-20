import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import { TabLinks } from "@/components/TabLink";
import { useTabAdvance } from "@/helpers/hooks";
import UserOutlined from "@/icons/heroicons/UserOutlined";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { EditOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import About from "./components/About";
import { UserPosts } from "./components/UserPosts";

export default function Profile() {

  const { data:user } = useCurrentUserQuery()

  const { outlet, tabs } = useTabAdvance({
    posts: {
      title: "Posts",
      element: <UserPosts id={user.id} />,
    },
    about: {
      title: "About",
      element: <About />,
    },
  });

  return (
    <div>
      <FarmerPageHeader title="Profile" back="/farmer" />
      <div className="relative flex justify-center">
        <img
          className="aspect-video w-full md:aspect-auto md:h-56 object-cover"
          src="https://res.cloudinary.com/djasbri35/image/upload/v1625929593/assets/error_ay6j96.jpg"
        />
        <Avatar
          icon={<UserOutlined />}
          src={user.profile_picture}
          size={120}
          className="absolute -bottom-[60px]"
        />
      </div>
      <div className="flex flex-col items-center gap-2 bg-white pt-[60px]">
        <span className="mt-2 font-bold">
          {user.fullname}
        </span>

        <Button shape="round" icon={<EditOutlined />}>
          Edit Profile
        </Button>
      </div>
      <TabLinks
        activeClassName="border-b border-primary text-primary"
        defaultClassName="flex items-center justify-center"
        className="sticky top-0 grid h-16 grid-cols-2 bg-white text-lg shadow-md"
        tabs={tabs}
      />
      {outlet}
    </div>
);
}
// import Page from "@/components/Page";
// import PageHeader from "@/components/PageHeader/PageHeader";
// import PostCard from "@/components/PostCard";
// import { useTab } from "@/helpers/hooks";
// import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
// import { useUserPostsQuery } from "@/query/queries/usePostsQuery";
// import { EditOutlined, UserOutlined } from "@ant-design/icons";
// import { Avatar, Button, Spin } from "antd";
// import { Link } from "react-router-dom";
// import About from "./components/About";

// const UserPosts = ({ id }) => {
//   const { data: posts, isLoading } = useUserPostsQuery(id)

//   if (isLoading)
//     return (
//       <div className="flex items-center justify-center py-16">
//         <Spin tip="Fetching posts" />
//       </div>
//     );

//   return (
//     <div className=" columns-2 gap-2 px-1 py-4">
//       {posts.map((post) => (
//         <PostCard key={post.id} post={post} to={`/farmer/posts/${post.id}`} />
//       ))}
//     </div>
//   );
// };

// export default function Profile() {
//   const { data: user } = useCurrentUserQuery();
//   const { isActive, selected } = useTab(["posts", "about"], "posts");

//   return (
//     <Page className="bg-slate-50">
//       <PageHeader back="/farmer" title="Profile" />
//       <div className="flex aspect-video flex-col items-center justify-end gap-2 bg-slate-300">
//         <Avatar
//           icon={<UserOutlined />}
//           src={user.profile_picture}
//           size={120}
//           className="relative -bottom-[60px]"
//         />
//       </div>
      // <div className="flex flex-col items-center gap-2 bg-white pt-[60px]">
      //   <span className="mt-2 font-bold">
      //     {user.firstname} {user.lastname}
      //   </span>

      //   <Button shape="round" icon={<EditOutlined />}>
      //     Edit Profile
      //   </Button>
      // </div>
//       <div className="no-scrollbar sticky top-0 z-30 grid grid-cols-2 items-center justify-center overflow-x-auto bg-white text-lg shadow-md ">
//         <TabLink tab="posts" isActive={isActive}>
//           <span className="p-4">Post</span>
//         </TabLink>
//         <TabLink tab="about" isActive={isActive}>
//           <span className="flex items-center justify-center p-4">About</span>
//         </TabLink>
//       </div>

//       {isActive("about") ? <About /> : <UserPosts id={user.id} />}
//     </Page>
//   );
// }

// function TabLink({ children, tab, isActive }) {
//   return (
//     <Link
//       to={`?tab=${tab}`}
//       className={`flex items-center justify-center  ${
//         isActive(tab) ? "border-b border-primary text-primary" : ""
//       }`}
//       replace
//     >
//       {children}
//     </Link>
//   );
// }
