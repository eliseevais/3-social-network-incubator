import React from 'react';
import { Styles } from './Header_Styles';
import { Container } from '../../wrappers/Container_Styles';
import { FlexWrapper } from '../../wrappers/FlexWrapper';
import {NavLink} from "react-router-dom";

export function Header(props: any) {
  return (
    <Styles.Header>
      <Container>
        <FlexWrapper align="center" justify="flex-end">
          <Styles.LoginBlock>
            {
              props.isAuth
              ? props.login
              : <NavLink to={'/login'}>Login</NavLink>
            }
          </Styles.LoginBlock>
        </FlexWrapper>
      </Container>
    </Styles.Header>
  );
};