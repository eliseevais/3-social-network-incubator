import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../styles/Theme.styled';


type HeaderStyledPropsType = {

}

export function Header(props: HeaderStyledPropsType) {
  console.log("Header is rendering");
  return (
    <HeaderBox>
      <span>It's so good to have you back &#9825; </span>
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  background-color: ${myTheme.colors.secondaryA};
  display: flex;
  height: 60px;
  width: 1280px;
  padding: 20px;
`
