import "antd/dist/antd.css";

import {Button, Layout, Menu} from "antd";
import { Link } from "react-router-dom";
import {PAGE} from "../choose-package/ChoosePackagePage";
import React from "react";

const { Header } = Layout;

function NavHeader() {
  return (
    <Header className="bg-yellow-400 pd-1">
        <div className="flex justify-between items-center">
            <h1>Logo</h1>
            <Button className="bg-yellow-400 hover:bg-color-600 cursor-pointer text-white border-black rounded-lg hover:bg-yellow-600">
                Logout
            </Button>
        </div>

    </Header>
  );
}

export default NavHeader;
