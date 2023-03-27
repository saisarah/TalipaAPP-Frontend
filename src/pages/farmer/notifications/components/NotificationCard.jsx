import { Avatar } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

const mapper = (type, ctx) => {
  switch (type) {
    case "App\\Notifications\\OrderReceived":
      return {
        link: `/farmer/orders/${ctx.order_id}`,
        avatar: ctx.avatar,
        description: `New order alert! Head over to this link to start proccesing it.`,
        name: ctx.name,
      };
  }
};

export function NotificationCard({ type, context, created_at }) {
  const { link, avatar, description, name } = mapper(type, context);

  return (
    <Link to={link} className="mx-4 flex flex-row gap-4 p-2 border-b">
      <Avatar className="flex-shrink-0" src={avatar} size="large" />
      <div className="flex flex-col">
        <span className="font-bold">{name} </span>
        <span className="leading-4">{description}</span>
        <span className="text-xsm text-slate-400">
          {moment(created_at).fromNow()}
        </span>
      </div>
    </Link>
  );
}
