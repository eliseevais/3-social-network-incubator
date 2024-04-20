import React from 'react';
import {Styles} from './SideBarMenu_Styles';
import {NavLink} from 'react-router-dom';

export function SideBarMenu(props: any) {
  return (
    <Styles.SideBarMenu>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/profile">My profile</NavLink>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/dialogs">Inbox</NavLink>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/users">Friends</NavLink>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/feeds">Feeds</NavLink>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to="/music">Music</NavLink>
    </Styles.SideBarMenu>
  )
};