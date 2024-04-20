import React from 'react';
import {AppWrapper} from './App_Styles';
import {Container} from './componentsWrappers/Container_Styles';
import {FlexWrapper} from './componentsWrappers/FlexWrapper';
import {Header} from './layout/header/Header';
import {Navbar} from './layout/navbar/Navbar';
import {SideBarMenuAndLogo} from './layout/sideBarMenuAndLogo/SideBarMenuAndLogo';
import {useSelector} from 'react-redux';

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