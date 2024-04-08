import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/backdrop";
import './MainNavigation.css'

const MainNavigation=props=>{
    const [drawer,setDrawer]=useState(false);
    // const drawerOpen=()=>{
    //     setDrawer(true)
    // };
    // const drawerClosed=()=>{
    //     setDrawer(false)
    // };
    const toggleDrawerHandler=()=>{
        setDrawer(!drawer)
    }
return (<React.Fragment>
      {drawer && <Backdrop onClick={toggleDrawerHandler}/>}  
      
    <SideDrawer show={drawer}>
    <nav className="main-navigation__drawer-nav" onClick={toggleDrawerHandler}>
        <NavLinks/>
    </nav>
    </SideDrawer>
 
    <MainHeader>
    <button className="main-navigation__menu-btn" onClick={toggleDrawerHandler}>
        <span></span>
        <span></span>
        <span></span>
    </button>
    <h1 className="main-navigation__title">
   <Link  to="/"> My Places </Link>
    </h1>
    <nav className="main-navigation__header-nav">
        <NavLinks/>
    </nav>
</MainHeader>
</React.Fragment>)
}

export default MainNavigation;