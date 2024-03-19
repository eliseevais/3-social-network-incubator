import styled from "styled-components";
import {myTheme} from "../../stylesGlobal/Theme.styled";

const ButtonFollowUnfollow = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 20px;
  background-color: ${myTheme.colors.accent};
  border: none;
  cursor: pointer;
`

const Location = styled.div`

`

const NameAndStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PhotoAndButton = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const UserAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 80px;
  margin: 0 10px 10px 0;
`

const UserPreview = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`

const UserWrapper = styled.div`
  width: 98%;
  display: flex;
  flex-direction: row;
  margin: 10px;
  background-color: ${myTheme.colors.ground};
  padding: 14px;
  box-sizing: border-box;
  border-radius: 30px;
`

export const Styles = {
  ButtonFollowUnfollow,
  Location,
  NameAndStatus,
  PhotoAndButton,
  UserAvatar,
  UserPreview,
  UserWrapper
}