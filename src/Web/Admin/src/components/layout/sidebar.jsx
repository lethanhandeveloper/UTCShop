import { AppstoreAddOutlined, DesktopOutlined, PieChartOutlined, ProductOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
        scrollbarWidth: 'thin',
        scrollbarGutter: 'stable',
    };

    const items = [
        getItem('Dashboard', '1', <Link to={"./dashboard"}><PieChartOutlined /></Link>),
        getItem('Option 2', '2', <DesktopOutlined />),
        getItem('Category', '3', <Link to={"./category"}><AppstoreAddOutlined /></Link>),
        getItem('Product', '4', <Link to={"/product"}><ProductOutlined /></Link>),
        getItem('User', 'sub1', <UserOutlined />, [
          getItem('Tom', '5'),
          getItem('Bill', '6'),
          getItem('Alex', '7'),
        ]),
        getItem('Settings', 'sub2', <UserOutlined />, [
            getItem('Role', '8'),
            getItem('Bill', '9'),
            getItem('Alex', '10'),
          ]),
        // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        // getItem('Files', '9', <FileOutlined />),
    ];
    

    return (
        <Sider collapsed={isSideBarCollapsed}
          style={siderStyle}
        >
        <div className="demo-logo-vertical" style={{ display: "flex", justifyContent: 'center' }}>
          <img style={{width: "100px" }} src={`/images/logo.png`}></img>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
    )
}

export default AppSideBar;