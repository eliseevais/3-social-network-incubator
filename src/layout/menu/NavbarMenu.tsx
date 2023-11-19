import React from 'react';
import { Styles } from './NavbarMenu_Styles';

type MenuPropsType = {

}

export function NavbarMenu(props: MenuPropsType) {
  console.log("Menu is rendering")
  return (
    <Styles.NavbarMenu>
        <a href="#">Home</a>
        <a href="#">Inbox</a>
        <a href="#">Friends</a>
        <a href="#">Feed</a>
        <a href="#">Melodies</a>
        <a href="#">Inspiration</a>
    </Styles.NavbarMenu>
  )
};