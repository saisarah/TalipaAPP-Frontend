import { PlusOutlined } from "@ant-design/icons";
import { Input, Tag } from "antd";
import { useState } from "react";

export default function Tags() {
  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputConfirm = () => {
    setTags((tags) => {
        return [...tags, inputValue]
    })
    setInputValue('')
    setInputVisible(false)
  };

  return (
    <>
      {tags.map((tag) => (
        <Tag closable key={tag}>{tag}</Tag>
      ))}

      {inputVisible ? (
        <Input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onPressEnter={handleInputConfirm}
          onBlur={handleInputConfirm}
          className="mr-4 w-[78px] align-top"
          type="text"
          size="small"
        />
      ) : (
        <Tag onClick={() => setInputVisible(true)}>
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </>
  );
}
