import React, { useState } from "react";
import "./App.css";
import AppHeader from "./components/layout/header";
import ViewByCategory from "./components/pages/viewbycategory/viewbycategory";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}

export default App;
