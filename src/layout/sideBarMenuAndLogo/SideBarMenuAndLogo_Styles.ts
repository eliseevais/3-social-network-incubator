import styled from "styled-components";
import flowers from '../../accets/img/flowers.jpg'

const SideBarMenuAndLogo = styled.div`
  min-width: 40%;
  min-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  //background-image: url('https://images.unsplash.com/photo-1578500523703-2201d5f03bcb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  
`;

const SideBarLogo = styled.div`
  margin: 40px 0;

  img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 200px;
  }
`;

export const Styles = {
  SideBarMenuAndLogo,
  SideBarLogo
};
