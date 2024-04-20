import styled from "styled-components";
import { myTheme } from "../../stylesGlobal/Theme.styled";

const Header = styled.header`
  background-color: ${myTheme.colors.accent};
  min-width: 100%;
  display: flex;
  min-height: 5vh;
  padding: 0 10px;
`;
const LoginBlock = styled.nav`
  a {
    text-decoration: none;
    color: #000000;
  }

  &:active {
    color: ${myTheme.colors.accent};
  }

  a.isActive {
    background: ${myTheme.colors.accent};
    border-radius: 4px;
    padding: 0 4px;
  }
`

export const Styles = {
  Header,
  LoginBlock
};
