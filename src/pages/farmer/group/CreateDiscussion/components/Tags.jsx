import { PlusOutlined } from "@ant-design/icons";
import { Input, Tag } from "antd";
import { useState } from "react";

const colors = ["red", "green", "blue", "yellow", "magenta", "pink"];

export default function Tags() {
  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputConfirm = () => {
    setTags((tags) => {
      return [
        ...tags,
        {
          name: inputValue,
          color: colors[(Math.random() * colors.length) | 0],
        },
      ];
    });
    setInputValue("");
    setInputVisible(false);
  };

  return (
    <>
      {tags.map((tag) => (
        <Tag color={tag.color} closable key={tag}>
          {tag.name}
        </Tag>
      ))}

      {inputVisible ? (
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleInputConfirm}
          onBlur={handleInputConfirm}
          className="mr-2 w-[78px] align-top"
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
