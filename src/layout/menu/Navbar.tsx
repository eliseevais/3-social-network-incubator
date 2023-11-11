import React from 'react';
import { Styles } from './Navbar_Styles';

type MenuPropsType = {

}

export function Navbar(props: MenuPropsType) {
  console.log("Menu is rendering")
  return (
    <Styles.Navbar>
        <a href="#">Home</a>
        <a href="#">Inbox</a>
        <a href="#">Friends</a>
        <a href="#">Feed</a>
        <a href="#">Melodies</a>
        <a href="#">Inspiration</a>
    </Styles.Navbar>
  )
};