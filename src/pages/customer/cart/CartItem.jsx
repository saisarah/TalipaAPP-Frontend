import { Checkbox } from "antd"
import { useState } from "react"
import MapPinOutline from "../../../icons/heroicons/MapPinOutline"

export default function CartItem({ name })
{

  const [count, setCount] = useState(1)

  return (
    <div className="flex items-center gap-2">
    <Checkbox />
    <div className="flex flex-grow gap-2 py-2">
      <img
        className="aspace-square w-1/4 self-start rounded"
        src="https://via.placeholder.com/150"
      />
      <div className="flex flex-grow flex-col">
        <span className="text-base">{ name }</span>
        <div className="flex items-center gap-2 overflow-hidden overflow-ellipsis text-xs text-slate-400">
          <MapPinOutline />
          <span className=" whitespace-nowrap ">
            Sta. Rosa City, Laguna hkkn
          </span>
        </div>
        <span className="text-lg font-bold text-primary">₱70.00</span>
        <div className="mt-2 flex">
          <button onClick={() => setCount(count => Math.max(1, count-1))} className="bg-slate-100 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-2 w-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </button>
          <span className="px-2 text-sm">{count}</span>
          <button onClick={() => setCount(count => count + 1)} className="bg-slate-100 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-2 w-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}