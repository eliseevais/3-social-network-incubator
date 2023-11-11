import React from 'react';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';

function App() {
  console.log("App is rendering");
  return (
    <>
      <Header title="It's so good to have you back!"/>
      <Main />
    </>
  );
}

export default App;