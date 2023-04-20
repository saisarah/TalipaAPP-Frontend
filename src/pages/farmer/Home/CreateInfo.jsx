import PageHeader from "@/components/PageHeader/PageHeader";
import { useAppContext } from "@/contexts/AppContext";
import { App, Button, Modal } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import CreatePost from "../CreatePost/CreatePost";
import blogPostImg from "./images/blog-post.png";

export default function CreateInfo() {
  const { modal } = App.useApp()
  const { viewport } = useAppContext()
  const [open, setOpen] = useState(false)
 
  const handleClick = (e) => {
    if (viewport.isMedium) {
      e.preventDefault()
      setOpen(true)
    }
  }

  const onClose = () => {
    modal.confirm({
      content: "Are you sure to discard?",
      centered: true,
      onOk() {
        setOpen(false)
      }
    })
  }
  
  return (
    <div className="my-16">
      <div className="mb-14 flex justify-center">
        <img src={blogPostImg} />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-bold">Create Post</h1>
        <p className="">Post and Sell your products</p>
        <Link to="/farmer/posts/create" onClick={handleClick}>
          <Button className="mt-2 text-lg text-[#739559]" size={"large"}>
            Create
          </Button>
        </Link>
      </div>
      <Modal 
        open={open}
        centered
        bodyStyle={{ maxHeight: '80vh',overflowY: "auto", padding:0 }}
        title="Create Post"
        footer={null}
        onCancel={onClose}
        >
        <CreatePost />
      </Modal>
    </div>
  );
}
