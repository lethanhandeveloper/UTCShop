import React, { useEffect, useState } from "react";
import "./App.css";
import AppHeader from "./components/layout/header";
import ViewByCategory from "./components/pages/viewbycategory/viewbycategory";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerInfo } from "./redux/auth/auth.slice";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    debugger;
    if (isLoggedIn) {
      dispatch(getCustomerInfo());
    }
  }, []);

  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}

export default App;
