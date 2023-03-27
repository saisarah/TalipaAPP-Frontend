import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, notification } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import { useState } from "react";

export default function Form3({ step, onSubmit, formData }) {
  const [attachments, setAttachments] = useState([]);

  const handleSubmit = () => {
    if (attachments.length <= 0) {
      notification.error({
        message: "Please select atleast 1 image to upload.",
      });
      return;
    }

    formData.attachments = attachments;

    setTimeout(onSubmit);
  };

  return (
    <Form
      style={{
        transform: `translateX(${-step * 100}%)`,
        height: step !== 2 ? 0 : "auto",
      }}
      className="w-full flex-shrink-0 flex-grow-0 p-4  transition"
      layout="vertical"
      onFinish={handleSubmit}
    >
      <Form.Item label="Add Photo" className="h-auto">
        <Dragger
          className="p-4"
          style={{ height: "auto" }}
          listType="picture"
          fileList={attachments}
          onChange={() => {
            // formData.delete("attachments[]");
            console.log("test");
          }}
          beforeUpload={(file) => {
            setAttachments((attachments) => [...attachments, file]);
            return false;
          }}
          onRemove={(file) => {
            setAttachments((attachments) => {
              return attachments.filter((a) => a !== file);
            });
          }}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger>
      </Form.Item>

      <Button
        className="mt-4"
        htmlType="submit"
        type="primary"
        size="large"
        block
      >
        Post Product
      </Button>
    </Form>
  );
}
