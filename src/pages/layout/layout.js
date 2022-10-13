import React from 'react';
import SideBar from "../navigation/side bar"
import Header from "../navigation/header/index"
import "./layout.scss"


const Layout = ({ children }) => {
    return (
      <>
        <React.Fragment>
        <Header />
        <SideBar />
        <main>{children}</main>
        </React.Fragment>
      </>
    )
  }
  
  export default Layout