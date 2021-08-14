import "antd/dist/antd.css";

import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

function NavHeader() {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <Link to="/home">Home</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default NavHeader;
