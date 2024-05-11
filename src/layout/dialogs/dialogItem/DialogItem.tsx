import React from "react";
import {DialogItemType} from "../../../redux/store-all-props-types";
import {NavLink} from "react-router-dom";
import {Styles} from "../Dialogs_Styles";

export const DialogItem = (props: DialogItemType) => {
  let path = '/dialogs/' + props.id;
  return (
    <Styles.Dialog>
      <Styles.DialogAvatar src={props.img}/>
      <NavLink className={(isActive) => isActive ? 'isActive' : ''}
               to={path}>
        {props.name}
      </NavLink>
    </Styles.Dialog>
  )
};