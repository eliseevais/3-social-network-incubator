import {Styles} from "../Inbox_Styles";
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogItemPropsType = {
  id: number;
  name: string;
  img: any
};

export const DialogItem = (props: DialogItemPropsType) => {
  let path = '/inbox/' + props.id;
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