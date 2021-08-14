import "antd/dist/antd.css";

import { Button, Layout, Menu, Drawer } from "antd";
import { Link, useHistory } from "react-router-dom";
import { PAGE } from "../choose-package/ChoosePackagePage";
import React, { useState } from "react";
import logo from "../../logo.svg";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

function NavHeader() {
  const history = useHistory();
  const [isVisible, setisVisible] = useState(false);
  return (
    <div className="bg-yellow-400 h-16 p-2">
      <div className="flex justify-between items-center h-full">
        <img className="w-2/6 " src={logo} alt="FoodAround" />
        <div className="flex justify-end items-center">
          <Button
            className="bg-yellow-400 hover:bg-color-600 cursor-pointer text-white border-black rounded-lg hover:bg-yellow-600"
            onClick={() => {
              localStorage.setItem("isLogin", false);
              window.location.href = "/";
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
          onClick={() => {
            setisVisible(false);
            history.push("/home");
          }}
        >
          หน้าแรก
        </div>
        <div>เปลี่ยนเป็นร้านค้า</div>
      </Drawer>
    </div>
  );
}

export default NavHeader;
