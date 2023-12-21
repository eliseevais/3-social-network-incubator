import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";

const Inbox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  a {
    text-decoration: none;
    color: #000000;
  }
  
  a.isActive {
    background: ${myTheme.colors.accent};
    border-radius: 4px;
    padding: 0 4px;
  }
`

const Dialog = styled.div`
  min-width: 200px;
  margin: 0 0 10px 0;
`

const Message = styled.div`
  margin: 0 0 10px 0;
`

export const Styles = {
  Inbox,
  Dialog,
  Message,
}