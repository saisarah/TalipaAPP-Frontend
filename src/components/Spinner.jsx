import { Spin } from "antd";


export default function Spinner({ tip, className="" }) {
  return (
    <div className={`flex items-center justify-center py-32 ${className}`}>
      <Spin tip={tip} />
    </div>
  )
}