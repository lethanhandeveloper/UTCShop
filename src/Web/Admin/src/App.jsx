import React, { useState } from 'react';
import './App.css'
import {
  AppstoreAddOutlined,
  BellOutlined,
  DesktopOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  SearchOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Breadcrumb, Layout, Menu, Table, theme } from 'antd';
import AppHeader from './components/layout/header';
import AppFooter from './components/layout/footer';
import { Outlet } from 'react-router-dom';
import AppSideBar from './components/layout/sidebar';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}





function App() {
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSideBar isSideBarCollapsed={isSideBarCollapsed} setIsSideBarCollapsed={setIsSideBarCollapsed}/>
      <Layout>
        <AppHeader isSideBarCollapsed={isSideBarCollapsed} setIsSideBarCollapsed={setIsSideBarCollapsed}/>
        <Content style={{ margin: '0 16px', minHeight: 'calc(100vh - 64px)' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <Outlet />
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
}

export default App
