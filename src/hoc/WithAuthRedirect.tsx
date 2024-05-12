import React from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MSTPForRedirectType = {
  isAuth: boolean
};

let MSTPForRedirect = (state: AppStateType): MSTPForRedirectType => ({
  isAuth: state.auth.isAuth
});

// export const withAuthRedirect = (Component: any) => {
//   class RedirectComponent extends React.Component<any, AppStateType> {
//     render() {
//       if (!this.props.isAuth) return <Redirect to={'/login'}/>
//       return <Component {...this.props}/>
//     }
//   }
//
//   let ConnectedAuthRedirectComponent = connect(MSTPForRedirect)(RedirectComponent);
//
//   return ConnectedAuthRedirectComponent
// }

export function withAuthRedirect<T>(Component: React.ComponentType<T>) {
  const RedirectComponent = (props: MSTPForRedirectType) => {

    let {isAuth, ...restProps} = props
    if (!isAuth) return <Redirect to={'/login'}/>
    return <Component {...restProps as T}/>
  }

  let ConnectedRedirectComponent = connect(MSTPForRedirect)(RedirectComponent);

  return ConnectedRedirectComponent
}