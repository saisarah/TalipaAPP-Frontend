import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Tag } from "antd";
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

function Reviews({ user, ratings, comment, review }) {
  return (
    <div>
      <div className="mx-4 my-4">
        <Card className="shadow-md">
          <div className="my-2 flex items-center ">
            <Avatar className="mr-2 h-10 w-10 flex-shrink-0" />
            <div className="flex flex-grow justify-between">
              <h1 className="text-lg">{user}</h1>
              <span className="ml-2 text-lg text-[#739559]">{ratings}</span>
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
  return (
    <div>
      <div className="mx-auto min-h-screen max-w-md bg-white">
        <div>
          <AboutInfo title={"Place lived"} descriptions={["Caloocan City"]} />
        </div>
        <div>
          {/* <AboutInfo title={"Commodity"} descriptions ={[<Tag className="text-lg">Mango</Tag>,<Tag className="text-lg">Banana</Tag>]} /> */}
          <div className="mx-4 my-4">
            <h1 className="text-lg font-bold">Commodity</h1>
            <div className="my-2 flex items-center">
              <span className="mx-2 flex flex-grow">
                <Tag className="text-base">Mango</Tag>
                <Tag className="text-base">Banana</Tag>
                <Tag className="text-base">Eggplant</Tag>
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
            ratings={[
              <StarFilled />,
              <StarFilled />,
              <StarOutlined />,
              <StarOutlined />,
              <StarOutlined />,
            ]}
            comment={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            review={"Was this review helpful?"}
          />
        </div>
        <div>
          <Reviews
            user={"Lenard Mangay-ayam"}
            ratings={[
              <StarFilled />,
              <StarFilled />,
              <StarOutlined />,
              <StarOutlined />,
              <StarOutlined />,
            ]}
            comment={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
        <div>
          <Reviews
            user={"Joshua Villanueva"}
            ratings={[
              <StarFilled />,
              <StarOutlined />,
              <StarOutlined />,
              <StarOutlined />,
              <StarOutlined />,
            ]}
            comment={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
        <div>
          <Reviews
            user={"Jhunrizz Lalata"}
            ratings={[
              <StarFilled />,
              <StarFilled />,
              <StarFilled />,
              <StarFilled />,
              <StarOutlined />,
            ]}
            comment={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
        <div>
          <Reviews
            user={"Juan Paolo Ortega"}
            ratings={[
              <StarFilled />,
              <StarFilled />,
              <StarFilled />,
              <StarOutlined />,
              <StarOutlined />,
            ]}
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
