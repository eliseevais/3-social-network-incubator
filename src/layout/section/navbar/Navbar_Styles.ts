import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";

const NavBar = styled.div`
  padding: 0 10px 0 0;
  min-height: 95vh;
  
`;

const NavbarPhoto = styled.div`
margin: 20px auto;
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 150px;
  }
`;

export const Styles = {
  NavBar,
  NavbarPhoto,
};
