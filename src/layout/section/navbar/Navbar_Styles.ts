import styled from "styled-components";

const NavBar = styled.div`
  padding: 0 10px 0 0;
  min-height: 95vh;
`;

const NavbarPhoto = styled.div`
margin: 40px 40px;
  img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 200px;
  }
`;

export const Styles = {
  NavBar,
  NavbarPhoto,
};
