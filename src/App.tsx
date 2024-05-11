import React from 'react';
import HeaderContainer from "./layout/header/HeaderContainer";
import {AppWrapper} from './App_Styles';
import {Container} from './wrappers/Container_Styles';
import {FlexWrapper} from './wrappers/FlexWrapper';
import {Navbar} from './layout/navbar/Navbar';
import {
  SideBarMenuAndLogo
} from './layout/sideBarMenuAndLogo/SideBarMenuAndLogo';
import {useSelector} from 'react-redux';

const App = () => {
  const appStore = useSelector(state => state)
  return (
    <AppWrapper>
      <HeaderContainer/>
      <Container>
        <FlexWrapper>
          <SideBarMenuAndLogo/>
          <Navbar/>
        </FlexWrapper>
      </Container>
    </AppWrapper>
  );
};

export default App;