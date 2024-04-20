import React from 'react';
import flowers from '../../accets/img/flowers.jpg';
import {SideBarMenu} from "./sideBarMenu/SideBarMenu";
import {Styles} from './SideBarMenuAndLogo_Styles';
import {FlexWrapper} from '../../componentsWrappers/FlexWrapper';

type ContentPropsType = {}

export function SideBarMenuAndLogo(props: ContentPropsType) {
  return (
    <Styles.SideBarMenuAndLogo>
      <FlexWrapper direction="column">
        <SideBarMenu/>
        <Styles.SideBarOnlyLogo>
          <img src={flowers} alt="img"/>
        </Styles.SideBarOnlyLogo>
      </FlexWrapper>
    </Styles.SideBarMenuAndLogo>
  )
}