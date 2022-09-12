import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import "./Layout.css";
const Layout = (props) => {
  return (
    <div>
      <Header />
      <main className="main">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
