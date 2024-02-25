import React from 'react';
import { Styles } from './Header_Styles';
import { Container } from '../Container_Styles';
import { FlexWrapper } from '../FlexWrapper';

type HeaderStyledPropsType = {
  title: string;
}

export function Header(props: HeaderStyledPropsType) {
  return (
    <Styles.Header>
      <Container>
        <FlexWrapper align="center">
          <span>{props.title}</span>
        </FlexWrapper>
      </Container>
    </Styles.Header>
  );
};