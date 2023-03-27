import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";

function Review({ user, ratings, comment }) {
  const Ratings = Array(5)
    .fill(null)
    .map((star, i) =>
      i < ratings ? <StarFilled key={i} /> : <StarOutlined key={i} />
    );

  return (
    <div>
      <div className="mx-4 my-4">
        <Card className="shadow-md">
          <div className="my-2 flex items-center ">
            <Avatar className="mr-2 h-10 w-10 flex-shrink-0" />
            <div className="flex flex-grow justify-between">
              <h1 className="text-lg">{user}</h1>
              <span className="ml-2 text-lg text-[#739559]">{Ratings}</span>
            </div>
          </div>
          <div className="">
            <span className="mb-2 flex text-base">{comment}</span>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <Page className="bg-white">
      <PageHeader back="/#" title="Reviews" />

      <div>
        <Review
          user={"Sarah Grace Arlyn Oben"}
          ratings={2}
          comment={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
      </div>
      <div>
        <Review
          user={"Reilly Rubante"}
          ratings={1}
          comment={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
      </div>
      <div>
        <Review
          user={"John Kenneth Reyes"}
          ratings={4}
          comment={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
      </div>
      <div>
        <Review
          user={"Saturnino Ursua"}
          ratings={3}
          comment={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
      </div>
    </Page>
  );
}
