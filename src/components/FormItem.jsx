import { Form, Input } from "antd";

// Form Item Wrapper
// Just to make the code simpler
export default function FormItem({
  children,
  addonBefore,
  placeholder,
  type,
  inputProps = {},
  ...props
}) {
  return (
    <Form.Item className="mb-4" hasFeedback {...props} >
      {children || (
        <Input
          addonBefore={addonBefore}
          type={type}
          placeholder={placeholder}
          size="large"
          className="rounded"
          {...inputProps}
        />
      )}
    </Form.Item>
  );
}
