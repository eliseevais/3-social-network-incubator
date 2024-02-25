import React from 'react';
import {AppStoreType} from "./redux/reduxStore";
import {Header} from './layout/header/Header';
import {NavBar} from './layout/section/navbar/NavBar';
import {ContentWindow} from "./layout/section/main/ContentWindow";
import {FlexWrapper} from "./components/FlexWrapper";
import {Container} from "./components/Container_Styles";
import {AppWrapper} from "./App_Styles";
import {useSelector} from "react-redux";

type AppPropsType = {
  store: AppStoreType
};

// const App: React.FC<AppPropsType> = (props) => {
const App = () => {
  const appStore = useSelector(state=>state)
  console.log(appStore)
  return (
      <AppWrapper>
        <Header title="It's so good to have you back!"/>
        <Container>
          <FlexWrapper>
            <NavBar/>
            <ContentWindow />
          </FlexWrapper>
        </Container>
      </AppWrapper>
  );
};

export default App;