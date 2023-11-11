import React from 'react';
import { Styles } from './Main_Styles';
import { Navbar } from '../../menu/Navbar';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Wall } from '../content/Wall';
import { Container } from '../../../components/Container_Styles';
import flowers from '../../../accets/img/flowers.jpg';

type ContentPropsType = {

}

export function Main(props: ContentPropsType) {
  return (
    <Styles.Main>
      <Container>
        <FlexWrapper >
          <Styles.NavbarWrapper>
            <Navbar />
            <Styles.MainPhoto>
              <img src={flowers} alt="img" />
            </Styles.MainPhoto>
          </Styles.NavbarWrapper>
          <Wall />
        </FlexWrapper>
      </Container>
    </Styles.Main>
  )
}

