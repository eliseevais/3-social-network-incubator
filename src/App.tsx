import React from 'react';
import {Header} from './layout/header/Header';
import {NavBar} from './layout/section/navbar/NavBar';
import {Main} from "./layout/section/main/Main";
import {FlexWrapper} from "./components/FlexWrapper";
import {Container} from "./components/Container_Styles";
import {AppWrapper} from "./App_Styles";

function App() {
  console.log("App is rendering");
  return (
    <AppWrapper>
      <Header title="It's so good to have you back!"/>
      <Container>
        <FlexWrapper>
          <NavBar/>
          <Main/>
        </FlexWrapper>
      </Container>
    </AppWrapper>
  );
}

export default App;