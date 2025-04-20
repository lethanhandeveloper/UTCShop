import { AppstoreAddOutlined, DesktopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
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
        getItem('User', 'sub1', <UserOutlined />, [
          getItem('Tom', '4'),
          getItem('Bill', '5'),
          getItem('Alex', '6'),
        ]),
        getItem('Settings', 'sub2', <UserOutlined />, [
            getItem('Role', '7'),
            getItem('Bill', '8'),
            getItem('Alex', '9'),
          ]),
        // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        // getItem('Files', '9', <FileOutlined />),
    ];
    

    return (
        <Sider collapsed={isSideBarCollapsed} 
          style={siderStyle}
        >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
    )
}

export default AppSideBar;