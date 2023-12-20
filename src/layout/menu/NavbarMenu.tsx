import React from 'react';
import { Styles } from './NavbarMenu_Styles';

type MenuPropsType = {

}

export function NavbarMenu(props: MenuPropsType) {
  console.log("Menu is rendering")
  return (
    <Styles.NavbarMenu>
        <a href="/myprofile">My profile</a>
        <a href="/inbox">Inbox</a>
        <a href="/friends">Friends</a>
        <a href="/feeds">Feeds</a>
        <a href="/melodies">Melodies</a>
    </Styles.NavbarMenu>
  )
};