import "antd/dist/antd.css";

import {Button, Layout, Menu} from "antd";
import {LogoutOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {PAGE} from "../choose-package/ChoosePackagePage";
import React from "react";
import logo from "../../logo.svg";

const {Header} = Layout;

function NavHeader() {
    return (
        <Header className="bg-yellow-400 pd-1">
            <div className="flex justify-between items-center h-full">
                <img className="w-2/6 " src={logo} alt="FoodAround"/>
                <Button
                    icon={<LogoutOutlined />}
                    className="bg-yellow-500 hover:bg-color-600 cursor-pointer text-white border-black rounded-lg hover:bg-yellow-600"
                    onClick={() => {
                        localStorage.setItem("isLogin", false);
                        window.location.href = "/";
                    }}
                >
                    Logout
                </Button>
            </div>
        </Header>
    );
}

export default NavHeader;
