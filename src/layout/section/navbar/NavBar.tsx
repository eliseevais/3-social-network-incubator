import React from 'react';
import {Styles} from './Navbar_Styles';
import {NavbarMenu} from '../../menu/NavbarMenu';
import {FlexWrapper} from '../../../components/FlexWrapper';
import flowers from '../../../accets/img/flowers.jpg';

type ContentPropsType = {}

export function NavBar(props: ContentPropsType) {
  return (
    <Styles.NavBar>
      <FlexWrapper direction="column">
        <NavbarMenu/>
        <Styles.NavbarPhoto>
          <img src={flowers} alt="img"/>
        </Styles.NavbarPhoto>
      </FlexWrapper>
    </Styles.NavBar>
  )
}