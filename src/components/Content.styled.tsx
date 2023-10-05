import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../styles/Theme.styled';

type ContentPropsType = {

}

export function Content(props: ContentPropsType) {
  return (
    <ContentBox>
      content
    </ContentBox>
  )
}

const ContentBox = styled.div`
  width: 740px;
  padding: 20px;
  background-color: ${myTheme.colors.secondaryB};
`