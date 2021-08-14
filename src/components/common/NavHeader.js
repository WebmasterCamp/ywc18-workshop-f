import "antd/dist/antd.css";

import { Button, Layout, Menu, Drawer } from "antd";
import { Link, useHistory } from "react-router-dom";

import React, { useState } from "react";
import { LogoutOutlined } from "@ant-design/icons";

import { PAGE } from "../choose-package/ChoosePackagePage";

import logo from "../../logo.svg";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

function NavHeader({ setIsLogin }) {
  const history = useHistory();
  const [isVisible, setisVisible] = useState(false);
  return (
    <div className="bg-yellow-400 h-16 p-6">
      <div className="flex justify-between items-center h-full">
        <img className="w-2/6 " src={logo} alt="FoodAround" />
        <div className="flex justify-end items-center">
          <Button
            icon={<LogoutOutlined />}
            className="bg-yellow-500 hover:bg-color-600 cursor-pointer text-white border-yellow-400 rounded-lg hover:bg-yellow-600"
            onClick={() => {
              setIsLogin(false);
              localStorage.setItem("isLogin", false);
              history.push("/home");
            }}
          >
            Logout
          </Button>
          <MenuOutlined
            style={{ marginLeft: "1rem", color: "white" }}
            onClick={() => {
              setisVisible(true);
            }}
          />
        </div>
      </div>
      <Drawer
        placement="right"
        onClose={() => {
          setisVisible(false);
        }}
        visible={isVisible}
      >
        <div
          className="cursor-pointer"
          onClick={() => {
            setisVisible(false);
            history.push("/home");
          }}
        >
          หน้าแรก
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            setisVisible(false);
            history.push("/merchant");
          }}
        >
          เปลี่ยนเป็นร้านค้า
        </div>
      </Drawer>
    </div>
  );
}

export default NavHeader;
