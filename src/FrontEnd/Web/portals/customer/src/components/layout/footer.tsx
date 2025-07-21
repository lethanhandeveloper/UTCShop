import React from "react";
import { Footer } from "antd/es/layout/layout";

const AppFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      UTC Shop ©{new Date().getFullYear()} Created by Le Thanh An
    </Footer>
  );
};

export default AppFooter;
