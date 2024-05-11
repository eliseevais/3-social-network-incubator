import React from 'react';
import flowers from '../../accets/img/flowers.jpg';
import {FlexWrapper} from '../../wrappers/FlexWrapper';
import {Styles} from './SideBarMenuAndLogo_Styles';
import {SideBarMenu} from "./sideBarMenu/SideBarMenu";

export function SideBarMenuAndLogo(props: any) {
  return (
    <Styles.SideBarMenuAndLogo>
      <FlexWrapper direction="column">
        <SideBarMenu/>
        <Styles.SideBarLogo>
          <img src={flowers} alt="img"/>
        </Styles.SideBarLogo>
      </FlexWrapper>
    </Styles.SideBarMenuAndLogo>
  )
}