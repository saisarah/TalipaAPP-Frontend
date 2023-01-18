import PageHeader from "../../../../components/PageHeader";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";
import searchGroup from '../../../../../public/assets/images/searchGroup.png'



const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(`selected ${value}`);
};


export default function SearchGroup() {
    return(
        <div className="mx-auto min-h-screen max-w-md bg-slate-50 bg-white">
            <PageHeader
        left={
          <Link to="/farmer/groups">
            <ArrowLeftOutlined style={{ fontSize: "16px" }} />
          </Link>
        }
        title="Create Group"/>
        {/* div for label invite members */

            <div className="z-10 grid h-12 items-center bg-white px-4">
                <h1>Invite Members</h1>
            </div>
        
        }
            <div className="z-10 grid h-10 items-center bg-white px-4" style={{backgroundColor: "#f4f4f4"}}>
            
            <Select 
                mode="multiple"
                style={{
                width: '100%',
                borderRadius: '30px',
                }}
                    placeholder="Search or Type Email"
                    onChange={handleChange}
                    options={options}
            />
                     
            </div>

            <div className="text-center justify-center mb-12">

                <div className="flex justify-center pt-36">
                <img src="../../../../../public/assets/images/searchGroup.png" width={190}/>;
                </div>
                <p><b>Thing are better with groups,</b>
                <br /><strong>Invite your members!</strong>
                <br />
                You can always do this later.</p>
            </div>
                
            <div className="flex justify-center col-span-2 gap-1 px-8">
            <Button type="primary" className="font-bold" ghost style={{width:'100%',}}>
                Back
            </Button>
            <Button type="primary" className="font-bold" style={{width:'100%',}}>
            Create
          </Button>
          </div>
        </div>
    
    
      )
}
