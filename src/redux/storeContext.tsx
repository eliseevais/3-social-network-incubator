import * as React from "react";
import {StorePropsType} from "./storeAllPropsType";

export const StoreContext = React.createContext({} as StorePropsType);

export type ProviderPropsType = {
  store: StorePropsType;
  children: React.ReactNode
}

export const Provider = (props: ProviderPropsType) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  )
}