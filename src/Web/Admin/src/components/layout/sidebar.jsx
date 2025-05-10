import {
  AppstoreAddOutlined,
  DesktopOutlined,
  PieChartOutlined,
  ProductOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const AppSideBar = ({ isSideBarCollapsed }) => {
  const siderStyle = {
    overflow: "auto",
    height: "100vh",
    position: "sticky",
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: "thin",
    scrollbarGutter: "stable",
  };

  const location = useLocation();

  const pathToKeyMap = {
    "/dashboard": "1",
    "/category": "3",
    "/product": "4",
  };

  const currentKey = pathToKeyMap[location.pathname] || 1;

  const items = [
    getItem(
      "Dashboard",
      "1",
      <Link to={"./dashboard"}>
        <PieChartOutlined />
      </Link>,
    ),
    getItem(
      "Category",
      "3",
      <Link to={"./category"}>
        <AppstoreAddOutlined />
      </Link>,
    ),
    getItem(
      "Product",
      "4",
      <Link to={"/product"}>
        <ProductOutlined />
      </Link>,
    ),
    getItem("User", "sub1", <UserOutlined />, [
      getItem("Tom", "5"),
      getItem("Bill", "6"),
      getItem("Alex", "7"),
    ]),
    getItem("Configuration", "sub2", <UserOutlined />, [
      getItem("Role", "8"),
      getItem("Bill", "9"),
      getItem("Alex", "10"),
    ]),
    // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    // getItem('Files', '9', <FileOutlined />),
  ];

  return (
    <Sider collapsed={isSideBarCollapsed} style={siderStyle}>
      <div
        className="demo-logo-vertical"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img style={{ width: "100px" }} src={`/images/logo.png`}></img>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={[currentKey]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default AppSideBar;
