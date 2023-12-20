import React from 'react';
import {Header} from './layout/header/Header';
import {NavBar} from './layout/section/navbar/NavBar';
import {ContentWindow} from "./layout/section/main/ContentWindow";
import {FlexWrapper} from "./components/FlexWrapper";
import {Container} from "./components/Container_Styles";
import {AppWrapper} from "./App_Styles";
import {BrowserRouter, Route} from "react-router-dom";
import {Inbox} from "./layout/section/inbox/Inbox";
import {MyPosts} from "./layout/section/main/myPosts/MyPosts";

function App() {
  console.log("App is rendering");
  return (
    <BrowserRouter>
      <AppWrapper>
        <Header title="It's so good to have you back!"/>
        <Container>
          <FlexWrapper>
            <NavBar/>
            <ContentWindow/>
          </FlexWrapper>
        </Container>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;