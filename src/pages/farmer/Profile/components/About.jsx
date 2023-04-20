import { useCurrentUserAddress, useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Spin, Tag } from "antd";
import { Link } from "react-router-dom";

function AboutInfo({ title, descriptions }) {
  return (
    <div>
      <div className="mx-4 my-4">
        <h1 className="text-lg font-bold">{title}</h1>
        {descriptions.map(function (description) {
          return (
            <>
              <div className="my-2 flex items-center">
                <span className="mx-2 flex flex-grow text-base">
                  {description}
                </span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

function Reviews({ user, ratings, comment }) {
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
            <span className="mb-2 flex">{comment}</span>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function About() {
  const { data: user } = useCurrentUserQuery();
  const { data: address, isLoading } = useCurrentUserAddress();
  if (isLoading) {
    return (
      <div className="flex justify-center py-16">
        <Spin />
      </div>
    );
  }
  return (
    <div>
      <div className="mx-auto w-full min-h-screen bg-white py-3">
        <div>
          <AboutInfo title={"Place lived"} descriptions={[address.province]} />
        </div>
        <div>
          {/* <AboutInfo title={"Commodity"} descriptions ={[<Tag className="text-lg">Mango</Tag>,<Tag className="text-lg">Banana</Tag>]} /> */}

          <div className="mx-4 my-4">
            <h1 className="text-lg font-bold">Commodity</h1>
            <div className="my-2 flex items-center">
              <span className="mx-2 flex flex-grow">
                {user.farmer.crops.map((crop) => (
                  <Tag key={crop.id} className="text-base">{crop.name}</Tag>
                ))}
              </span>
            </div>
          </div>
        </div>
        <div className="mx-4 my-4 flex flex-col ">
          <h1 className="text-lg font-bold">Ratings and Reviews</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
          <div className="flex items-center py-2">
            <h1 className="mb-2 mr-2 text-6xl">4.0</h1>
            <div className="flex flex-col text-base text-[#739559]">
              <div className="flex">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarOutlined />
              </div>
              <span className="text-base text-black">
                Based on 20,251 Reviews
              </span>
            </div>
          </div>
        </div>
        <div>
          <Reviews
            user={"Ruel Almonia"}
            ratings={2}
            comment={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            review={"Was this review helpful?"}
          />
        </div>
        <div>
          <Reviews
            user={"Lenard Mangay-ayam"}
            ratings={2}
            comment={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
        <div>
          <Reviews
            user={"Joshua Villanueva"}
            ratings={1}
            comment={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
        <div>
          <Reviews
            user={"Jhunrizz Lalata"}
            ratings={4}
            comment={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
        <div>
          <Reviews
            user={"Juan Paolo Ortega"}
            ratings={3}
            comment={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
        <Link to="reviews">
          <Button className="border-none text-[#739559]" size="large">
            See all reviews
          </Button>
        </Link>
      </div>
    </div>
  );
}
