import React from 'react';
import { Header } from './components/Header.styled';
import styled from 'styled-components';
import { myTheme } from './styles/Theme.styled';
import { Menu } from './components/Menu.styled';
import { Content } from './components/Content.styled';

function App() {
  console.log("App is rendering");
  return (
    <AppBox >
      <Header />
      <MainContentBox>
        <Menu />
        <Content />
      </MainContentBox>
    </AppBox>
  );
}

export default App;

const AppBox = styled.div`
  width: 1280px;
  height: 100vh;  
  background-color: ${myTheme.colors.ground};
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`

const MainContentBox = styled.div`
  width: 1280px;
  height: 100vh;  
  display: flex;
`
