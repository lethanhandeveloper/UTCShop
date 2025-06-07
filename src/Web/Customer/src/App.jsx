import React, { useState } from "react";
import "./App.css";
import AppHeader from "./components/layout/header";
import ViewByCategory from "./components/pages/viewbycategory/viewbycategory";

function App() {
  return (
    <>
      <AppHeader />
      <ViewByCategory />
    </>
  );
}

export default App;
