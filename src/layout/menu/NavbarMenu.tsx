import React from 'react';
import { Styles } from './NavbarMenu_Styles';
import {NavLink} from "react-router-dom";

type MenuPropsType = {

}

export function NavbarMenu(props: MenuPropsType) {
  console.log("Menu is rendering")
  return (
    <Styles.NavbarMenu>
        <NavLink activeClassName='active' to="/myprofile">My profile</NavLink>
        <NavLink to="/inbox">Inbox</NavLink>
        <NavLink to="/friends">Friends</NavLink>
        <NavLink to="/feeds">Feeds</NavLink>
        <NavLink to="/melodies">Melodies</NavLink>
    </Styles.NavbarMenu>
  )
};