import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { ArrowLeftOutlined, SearchOutlined } from "@ant-design/icons";

function Order({ vendor, displayphoto, date }) {
  return (
   
        <div className=" w-full border-b border-t bg-white">
          <ul className="">
            <li className="">
              <a href="#" className="flex p-4 w-full items-center gap-2">
                <span className="">
                  <img className="rounded-full" src={displayphoto} alt="" height={69} width={69}/>
                </span>
                <div className="flex h-full flex-grow flex-col leading-4">
                  <span className="text-xl font-bold">{vendor}</span>
                  <span className="">{date}</span>
                </div>
                <div className="">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                
              </a>
            </li>
          </ul>

            <div className="border-t flex p-2 w-full gap-2 ">
              <p>Order Name</p>

            </div>
        </div>
      
  );
}

export default function Orders() {
  return (
    <div className="mx-auto max-w-md bg-slate-50">
      <PageHeader
        left={
          <Link to="/farmer">
            <ArrowLeftOutlined style={{ fontSize: "16px" }} />
          </Link>
        }
        title="Orders"
      />
     

      <Order
        vendor="ATCOST"
        displayphoto="https://via.placeholder.com/59x59"
        date="3 days ago"
      />
    </div>
  );
}
