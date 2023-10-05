import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../styles/Theme.styled';
import flowers from '../accets/img/flowers.jpg'

type MenuPropsType = {

}

export function Menu(props: MenuPropsType) {
  console.log("Menu is rendering")
  return (
    <MenuBox>
      <nav>
        <a href="#">Home</a>
        <a href="#">Inbox</a>
        <a href="#">Friends</a>
        <a href="#">Feed</a>
        <a href="#">Melodies</a>
        <a href="#">Inspiration</a>
      </nav>
      <img src={flowers} alt="img" />
    </MenuBox>
  )
}

const MenuBox = styled.div`
  width: 540px;
  padding: 20px;

  nav {
    display: flex;
    justify-content: space-between;
    
    a {
      text-decoration: none;
      color: #000000;
    }
  }

  img {
    width: 500px;
    height: 500px;
    object-fit: cover;
    border-radius: 250px;
    margin-top: 60px;
  }
`