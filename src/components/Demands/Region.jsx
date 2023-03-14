import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { Avatar, Form } from "antd";
import { Link } from "react-router-dom";

export default function Region() {
  return (
    <Page className=" bg-slate-50">
      <PageHeader
        back="/farmer/home/commodities"
        title="Region I (Ilocos Region)"
      />
      <Post
        name="Joshua Villanueva"
        date="January 25, 2023"
        commodity="Banana"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, ab!"
        budget="1,500"
        status="Open"
        payment="Gcash"
        quantity="250kg"
        location="Ilocos Norte"
      />
      <Post
        name="Ruel Almonia"
        date="January 25, 2023"
        commodity="Banana"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugiat ad laboriosam? Saepe distinctio enim alias, quod, in porro magni corrupti omnis cum expedita veniam eum corporis repellendus, earum aspernatur?"
        budget="2,500"
        status="Closed"
        payment="Gcash, Cash on Delivery"
        quantity="250kg"
        location=" Ilocos Sur"
      />
      <Post
        name="Jhunriz Lalata"
        date="January 25, 2023"
        commodity="Banana"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugiat ad laboriosam? Saepe distinctio enim alias, quod, in porro magni corrupti omnis cum expedita veniam eum corporis repellendus, earum aspernatur?"
        budget="500"
        status="Looking for"
        payment="Gcash, Cash on Delivery"
        quantity="250kg"
        location=" La Union "
      />
    </Page>
  );
}

function Post({
  name,
  date,
  commodity,
  description,
  budget,
  status,
  payment,
  quantity,
  location,
}) {
  return (
    <>
      <Form className="mt-2 flex-col bg-white p-4">
        <div className="flex justify-between border-b-2 pb-2">
          <div className="flex gap-2">
            <Avatar size="large" />
            <div className="flex flex-col">
              <span className="">{name}</span>
              <span className="text-xs text-slate-400">{date}</span>
            </div>
          </div>

          <div className="">
            <Link className="rounded bg-primary p-1 text-white">Inquire</Link>
          </div>
        </div>

        <div className="mt-2">
          <span className=" text-slate-400">Description</span>
          <p className="text-justify">{description}</p>
        </div>

        <div className="flex justify-between">
          <div>
            <span className="text-slate-400">Commodity</span>
            <p>{commodity}</p>
            <span className="text-slate-400">Payment Method</span>
            <p>{payment}</p>
            <span className="text-slate-400">Location</span>
            <p>{location}</p>
          </div>
          <div>
            <span className="text-slate-400">Budget</span>
            <p>{budget}</p>
            <span className="text-slate-400">Status</span>
            <p>{status}</p>
            <span className="text-slate-400">Quantity</span>
            <p>{quantity}</p>
          </div>
        </div>
      </Form>
    </>
  );
}
