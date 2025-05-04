import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getAdminInfo } from "../../redux/auth/auth.slice";
import { useEffect, useState } from "react";
import { Spin } from "antd";


const PrivateRoute = () => {
  const user = useSelector(state => state.auth.userInfo);
  const isLoading = useSelector(state => state.auth.isLoadingPrivatePage);
  // const user = true;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminInfo());
  }, [])

  return isLoading ? 
      <div style={{ position: "fixed", top: "50%", left: "50%", 
        transform: "translate(-50%, -50%)"
       }}>
          <Spin size="large" style={{ fontSize: 48}} Spin/>
      </div> : user ? <Outlet /> : <Navigate to="/auth" replace />
};

export default PrivateRoute;