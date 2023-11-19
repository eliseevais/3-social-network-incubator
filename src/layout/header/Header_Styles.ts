import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";

const Header = styled.header`
  background-color: ${myTheme.colors.secondaryA};
  min-width: 100%;
  display: flex;
  min-height: 5vh;
  padding: 0 10px;
`;

export const Styles = {
  Header,
};
