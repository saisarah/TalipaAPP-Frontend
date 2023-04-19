import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import Http, { getErrorMessage } from "@/helpers/Http";
import { FileImageOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { App, Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const submitGroupPost = async (data) => {
  const { data: result } = await Http.post("/farmer-group/posts", data);
  return result;
};

const useSubmitGroupPost = (option) => {
  return useMutation(submitGroupPost, option);
};

export default function CreateDiscussion() {
  const { notification } = App.useApp()
  const navigate = useNavigate()
  const { mutate, isLoading } = useSubmitGroupPost({
    onSuccess() {
      notification.success({ message: "Posted Successfully" })
      navigate("/farmer/groups");
    },
    onError(err) {
      notification.error({ message: getErrorMessage(err) })
    }
  });

  const handleSubmit = (data) => {
    if (isLoading) return;
    mutate(data);
  };

  return (
    <div className="min-h-screen bg-white">
      <FarmerPageHeader back="/farmer/groups" title="Create Discussion" />
      <div className="p-3">
        <Form onFinish={handleSubmit}>
          <div className="border border-slate-200 py-1">
            <Form.Item name="description" required>
              <Input.TextArea
                required
                autoSize={{ minRows: 3, maxRows: 7 }}
                className="rounded border-none focus:shadow-none"
                placeholder="Write something..."
              />
            </Form.Item>
            <Button
              className="mt-2 text-slate-600"
              type="link"
              icon={<FileImageOutlined />}
            >
              Add Image
            </Button>
          </div>
          <Button
            loading={isLoading}
            htmlType="submit"
            block
            type="primary"
            className="mt-2"
          >
            Post
          </Button>
        </Form>
      </div>
    </div>
  );
}
// import PageHeader from "@/components/PageHeader/PageHeader";
// import {
//   ArrowLeftOutlined,
//   FileImageOutlined,
//   PlusOutlined,
//   TagOutlined,
// } from "@ant-design/icons";
// import { Button, Space, Tag } from "antd";
// import { Link } from "react-router-dom";
// import Tags from "./components/Tags";
// import { useRef } from "react";

// function Discussions({ title, tags, image }) {
//   const textAreaRef = useRef(null);

//   function autoResize() {
//     textAreaRef.current.style.height = "auto";
//     textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
//   }

//   return (
//     <>
//       <div className="w-full ">
//         <div className="mb-4 mt-4 w-full border bg-white px-4 py-4">
//           <span className="text-lg text-black">
//             <textarea
//               onInput={autoResize}
//               ref={textAreaRef}
//               className="h-max: w-full resize-none outline-none"
//               type="text"
//               style={{ height: "auto" }}
//               placeholder="Set a title of discussion"
//             />
//           </span>

//           <div className="w-full pt-4">
//             <div className="inline-flex items-center gap-4">
//               <div>
// <Button
//   style={{ padding: "0", border: "0", margin: "0" }}
//   icon={<FileImageOutlined />}
// >
//   Add Image
// </Button>
//               </div>
//               <div>
//                 <Tags />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="">
//         <textarea
//           className="
//         form-control
//         m-0
//         block
//         w-full
//         px-4 py-4  text-base
//         font-normal
//         text-gray-700
//         transition
//         ease-in-out
//         focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
//       "
//           id="exampleFormControlTextarea1"
//           rows="3"
//           placeholder="Write a post"
//         ></textarea>
//       </div>
//     </>
//   );
// }

// export default function CreateDiscussion() {
//   return (
//     <div className="relative mx-auto min-h-screen max-w-md bg-white px-2">
//       <PageHeader
//         left={
//           <Link to="/farmer">
//             <ArrowLeftOutlined style={{ fontSize: "16px" }} />
//           </Link>
//         }
//         title="Create Discussion"
//       />
//       <div className="flex">
//         <div className="h-14 grow">
//           <Discussions title="This is a title of the discussion" />
//         </div>
//         <div className="flex-none">
//           <div className="absolute inset-x-0 bottom-0 m-6 ">
//             <Space direction="vertical" style={{ width: "100%" }}>
//               <Button className="rounded font-bold" type="primary" block>
//                 Post
//               </Button>
//             </Space>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
