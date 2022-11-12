import {
  HomeFilled,
  HomeOutlined,
  MessageFilled,
  MessageOutlined,
  SettingFilled,
  SettingOutlined,
  ShopFilled,
  ShopOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky bottom-0 rounded-t-3xl bg-[#606C38] p-2 px-4">
      <div className="flex items-center justify-between">
        <NavLink to="/">
          {({ isActive }) => (
            <Button
              type="text"
              icon={
                isActive ? (
                  <HomeFilled className="text-white" />
                ) : (
                  <HomeOutlined className="text-white" />
                )
              }
            />
          )}
        </NavLink>

        <NavLink to="/orders">
          {({ isActive }) => (
            <Button
              type="text"
              icon={
                isActive ? (
                  <ShopFilled className="text-white" />
                ) : (
                  <ShopOutlined className="text-white" />
                )
              }
            />
          )}
        </NavLink>

        <NavLink to="/messages">
          {({ isActive }) => (
            <Button
              type="text"
              icon={
                isActive ? (
                  <MessageFilled className="text-white" />
                ) : (
                  <MessageOutlined className="text-white" />
                )
              }
            />
          )}
        </NavLink>

        <NavLink to="/settings">
          {({ isActive }) => (
            <Button
              type="text"
              icon={
                isActive ? (
                  <SettingFilled className="text-white" />
                ) : (
                  <SettingOutlined className="text-white" />
                )
              }
            />
          )}
        </NavLink>
      </div>
    </div>
  );
}
