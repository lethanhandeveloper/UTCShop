import { theme } from 'antd';
import { useEffect, useState } from 'react';
import { Avatar, Badge,Layout } from 'antd';
import { BellOutlined, MenuFoldOutlined, MenuUnfoldOutlined, MoonFilled, SearchOutlined, SunFilled } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
import authAPI from "../../services/api/authAPI";
import { useDispatch, useSelector } from 'react-redux';
import { getAdminInfo } from '../../redux/auth/auth.slice';


const AppHeader = ({ isSideBarCollapsed, setIsSideBarCollapsed }) => {
  const user = useSelector(state => state.auth.userInfo);

  const {
      token: { colorBgContainer },
    } = theme.useToken();

    return(
        <Header style={{ background: colorBgContainer, display: "flex",
            alignItems: "center", padding: "2em"
           }} >
            <div className='headerContentWrapper' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                <span className='headerContentLeftWrapper'>
                    { 
                      !isSideBarCollapsed ? <MenuUnfoldOutlined style={{ fontSize: "1.5em" }} onClick={() => setIsSideBarCollapsed(true)}/>
                      : <MenuFoldOutlined style={{ fontSize: "1.5em" }} onClick={() => setIsSideBarCollapsed(false)}/>
                    }
                </span>
                <span style={{ display: "flex", gap: "20px", flexDirection: "row", alignItems: "center" }}>
                  <SearchOutlined style={{ fontSize: "1.5em" }}/>
                  <Badge count={5}>
                    <BellOutlined shape="square" size="large" style={{ fontSize: "1.5em" }}/>
                  </Badge>
                  {/* <SunFilled style={{ fontSize: "1.5em" }}/> */}
                  <MoonFilled style={{ fontSize: "1.5em" }}/>
                  <div>
                    <Avatar style={{ fontSize: "0.5em" }}></Avatar>
                    <span style={{ marginLeft: "1em", fontFamily: "San Francisco", color: "#666666", fontSize: "1em" }}>{ user && user.name } </span>
                  </div>
                </span>
            </div>
          </Header>
    )
}

export default AppHeader;

