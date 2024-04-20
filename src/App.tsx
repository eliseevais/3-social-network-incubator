import React from 'react';
import {Header} from './layout/header/Header';
import {SideBarMenuAndLogo} from './layout/sideBarMenuAndLogo/SideBarMenuAndLogo';
import {Navbar} from "./layout/navbar/Navbar";
import {useSelector} from "react-redux";
import {FlexWrapper} from "./componentsWrappers/FlexWrapper";
import {Container} from "./componentsWrappers/Container_Styles";
import {AppWrapper} from "./App_Styles";

const App = () => {
  const appStore = useSelector(state => state)
  return (
    <AppWrapper>
      <Header title="Login"/>
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