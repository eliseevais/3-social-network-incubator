import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

const NavbarMenu = styled.nav`
  width: 100%;
  padding: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: #000000;
    margin-right: 10px;
  
    &:active {
      color: ${myTheme.colors.accent};
    }
  }
  a.isActive {
    background: ${myTheme.colors.accent};
    border-radius: 4px;
    padding: 0 4px;
  }
`;

export const Styles = {
  NavbarMenu,
};
