import OrderDescriptions from "@/components/Orders/OrderDescriptions";
import OrderProfile from "@/components/Orders/OrderProfile";
import PostLink from "@/components/Orders/PostLink";
import PageHeader from "@/components/PageHeader";
import { useOrderQuery } from "@/query/queries/useOrdersQuery";
import { Divider, Spin } from "antd";
import { useParams } from "react-router-dom";

export default function OrderInfo() {
  const { id } = useParams();

  const { data: order, isLoading } = useOrderQuery(id);

  return (
    <div className="app-size bg-white ">
      <PageHeader back="/farmer/orders?tab=pending" title="Order" />

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Spin tip="Fetching Order Information" />
        </div>
      ) : (
        <div className="w-full border-b border-t bg-white p-4">
          <OrderProfile
            messageLink={`/farmer/messages/${order.buyer_id}`}
            user={order.buyer}
            label="Buyer"
          />
          <OrderDescriptions className="mt-4" order={order} />

          <Divider />

          <PostLink to={`/farmer/posts/${order.id}`} post={order.post} />
        </div>
      )}
    </div>
  );
}

// {order.status == "pending" && (
//   <div className="mt-4 justify-end text-center">
//     <button className="align-items-center mt-2 w-10/12 rounded-[4px] bg-[#739559] p-2 font-bold text-white">
//       Accept
//     </button>
//   </div>
// )}
//
// {order.status == "shipped" && (
//   <>
//     <div className="mt-2 w-full bg-white">
//       {/* Delivery Method */}
//       {/* <div className="flex justify-between px-4">
//         <div className="text-lg font-bold text-zinc-400">
//           <p>Delivery Method:</p>
//         </div>

//         <div className="text-lg capitalize">Transportify</div>
//       </div> */}

//       {/* Payment Method */}
//       {/* <div className="flex justify-between px-4">
//         <div className="text-lg font-bold text-zinc-400">
//           <p>Payment Method:</p>
//         </div>

//         <div className="text-lg capitalize">Gcash</div>
//       </div> */}

//       {/* Tracking */}
//       {/* <div className="flex justify-between px-4">
//         <div className="text-lg font-bold text-zinc-400">
//           <p>Tracking #:</p>
//         </div>

//         <div className="text-lg capitalize">1Akw1298DCM5398</div>
//       </div> */}
//     </div>

//     <div
//       className="mb-4 h-1"
//       style={{
//         backgroundImage:
//           "repeating-linear-gradient(45deg, #6fa6d6, #6fa6d6 33px, transparent 0, transparent 41px, #f18d9b 0, #f18d9b 74px, transparent 0, transparent 82px)",
//       }}
//     ></div>
//     <div className="grid w-full justify-center">
//       <Steps direction="vertical" current={2} className="w-full ">
//         {items.map((item, index) => (
//           <Step
//             className=""
//             key={index}
//             title={
//               <div>{item.title}</div>
//               // <div className="flex items-center justify-between">

//               // </div>
//             }
//             description={
//               <div className="grid grid-cols-2 gap-2">
//                 <div>
//                   <p>{item.description}</p>
//                 </div>
//                 <div className="text-right text-sm">
//                   {item.timestamp}
//                 </div>
//               </div>
//             }
//           />
//         ))}
//       </Steps>
//     </div>
//   </>
// )}
