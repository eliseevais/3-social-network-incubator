import React from 'react';
import {NavLink} from "react-router-dom";
import {Styles} from './SideBarMenu_Styles';

type MenuPropsType = {}

export function SideBarMenu(props: MenuPropsType) {
  return (
    <Styles.SideBarMenu>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/profile">My profile</NavLink>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/dialogs">Inbox</NavLink>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/friends">Friends</NavLink>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/feeds">Feeds</NavLink>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/music">Music</NavLink>
    </Styles.SideBarMenu>
  )
};