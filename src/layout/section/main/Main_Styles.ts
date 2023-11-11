import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";

const Main = styled.div`
  background-color: ${myTheme.colors.secondaryB};
  padding: 0 10px;
  min-height: 95vh;
`;

const MainPhoto = styled.div`
margin: 80px auto;
  img {
    width: 450px;
    height: 450px;
    object-fit: cover;
    border-radius: 250px;
  }
`;

const NavbarWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`

export const Styles = {
  Main,
  MainPhoto,
  NavbarWrapper,
};
