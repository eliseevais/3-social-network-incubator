import React from 'react';
import {Header} from './layout/header/Header';
import {NavBar} from './layout/section/navbar/NavBar';
import {ContentWindow} from "./layout/section/main/ContentWindow";
import {FlexWrapper} from "./components/FlexWrapper";
import {Container} from "./components/Container_Styles";
import {AppWrapper} from "./App_Styles";
import {BrowserRouter} from "react-router-dom";
import {store} from './index';

type AppPropsType = any;

const App:React.FC<AppPropsType> = (props) =>  {
  console.log("App is rendering", props);
  return (
    <BrowserRouter>
      <AppWrapper>
        <Header title="It's so good to have you back!"/>
        <Container>
          <FlexWrapper>
            <NavBar/>
            <ContentWindow store={props.store}/>
          </FlexWrapper>
        </Container>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;