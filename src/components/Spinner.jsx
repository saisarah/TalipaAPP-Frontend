import { Spin } from "antd";


export default function Spinner({ tip }) {
  return (
    <div className="flex items-center justify-center py-32">
      <Spin tip={tip} />
    </div>
  )
}