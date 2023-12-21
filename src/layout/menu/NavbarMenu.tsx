import React from 'react';
import {Styles} from './NavbarMenu_Styles';
import {NavLink} from "react-router-dom";

type MenuPropsType = {}

export function NavbarMenu(props: MenuPropsType) {
  console.log("Menu is rendering")
  return (
    <Styles.NavbarMenu>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/myprofile">My profile</NavLink>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/inbox">Inbox</NavLink>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/friends">Friends</NavLink>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/feeds">Feeds</NavLink>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/melodies">Melodies</NavLink>
    </Styles.NavbarMenu>
  )
};