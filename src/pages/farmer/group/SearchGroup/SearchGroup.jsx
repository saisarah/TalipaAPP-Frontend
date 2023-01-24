import PageHeader from "@/components/PageHeader";
import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import { useState } from "react";

export default function SearchGroup() {
  const [members, setMembers] = useState([
    "Reilly Rubante",
    "Paolo Ortega",
    "Ruel Almonia",
  ]);

  return (
    <div className="mx-auto min-h-screen max-w-md bg-[#F4F4F4]">
      <PageHeader title="Create Group" back="/farmer/groups/new" />

      <div className="bg-white p-4">
        <span className="text-lg font-semibold">Invite Members</span>
      </div>

      <div className="border-b p-4">
        <div className="flex items-center gap-2 rounded-lg bg-white p-2">
          <SearchOutlined className="text-slate-500" />
          <input
            type="text"
            className="flex-grow outline-none"
            placeholder="Search or type email"
          />
        </div>
      </div>
      <div>
        {members.map(function (member) {
          return (
            <div
              key={member}
              className="flex cursor-pointer items-center gap-2 border-b bg-white p-4 hover:bg-slate-50"
            >
              <Avatar className="border border-green-500" />
              <span className="flex-grow text-lg">{member}</span>
              <button className="text-red-500">
                <CloseCircleOutlined className="text-lg" />
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex-col-2 flex gap-2 bg-slate-100 py-16">
        <Button className="text-bold hover:bg-primary-500 flex-grow border-primary text-primary">
          Back
        </Button>
        <Button type="primary" className="hover:bg-primary-500 flex-grow">
          Create
        </Button>
      </div>
    </div>
  );
}
// import PageHeader from "../../../../components/PageHeader";
// import { Link } from "react-router-dom";
// import { ArrowLeftOutlined, SearchOutlined } from "@ant-design/icons";
// import { Button, Select, Space } from "antd";
// import { useState } from "react";
// // import searchGroup from '../../../../../public/assets/images/searchGroup.png'

// const options = [];
// for (let i = 10; i < 36; i++) {
//   const value = i.toString(36) + i;
//   options.push({
//     label: `Long Label: ${value}`,
//     value,
//   });
// }
// const App = () => {
//   const [value, setValue] = useState(["a10", "c12", "h17", "j19", "k20"]);
//   const selectProps = {
//     mode: "multiple",
//     style: {
//       width: "100%",
//     },
//     value,
//     options,
//     onChange: (newValue) => {
//       setValue(newValue);
//     },
//     placeholder: "Select Item...",
//     maxTagCount: "responsive",
//   };
// };

// export default function SearchGroup() {
//   const [value, setValue] = useState(["a10", "c12", "h17", "j19", "k20"]);
//   const selectProps = {
//     mode: "multiple",
//     style: {
//       width: "100%",
//     },
//     value,
//     options,
//     onChange: (newValue) => {
//       setValue(newValue);
//     },
//     placeholder: "Select Item...",
//     maxTagCount: "responsive",
//   };

//   return (
//     <div className="mx-auto min-h-screen max-w-md bg-slate-50 bg-white">
//       <PageHeader
//         left={
//           <Link to="/farmer/groups">
//             <ArrowLeftOutlined style={{ fontSize: "16px" }} />
//           </Link>
//         }
//         title="Create Group"
//       />
//       {
//         /* div for label invite members */

//         <div className="z-10 grid h-12 items-center bg-white px-4">
//           <h1>Invite Members</h1>
//         </div>
//       }
//       <div
//         className="z-10 grid h-10 items-center bg-white px-4"
//         style={{ backgroundColor: "#f4f4f4" }}
//       >
//         <Space
//           direction="vertical"
//           style={{
//             width: "100%",
//           }}
//         >
//           <Select {...selectProps} />
//           <Select {...selectProps} disabled />
//         </Space>
//       </div>

//       <div className="mb-12 justify-center text-center">
//         <div className="flex justify-center pt-36">
//           <img src="/assets/temp/group/searchGroup.png" width={190} />;
//         </div>
//         <p>
//           <b>Thing are better with groups,</b>
//           <br />
//           <strong>Invite your members!</strong>
//           <br />
//           You can always do this later.
//         </p>
//       </div>

//       <div className="col-span-2 flex justify-center gap-1 px-8">
//         <Button
//           type="primary"
//           className="font-bold"
//           ghost
//           style={{ width: "100%" }}
//         >
//           Back
//         </Button>
//         <Button type="primary" className="font-bold" style={{ width: "100%" }}>
//           Create
//         </Button>
//       </div>
//     </div>
//   );
// }
