import * as React from "react";

import siteReducer from "./Site.reducer";
import { SiteState, initialState, Dispatch } from "./Site.types";

const SiteStateContext = React.createContext<SiteState | undefined>(undefined);
const SiteDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

const SiteProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(siteReducer, initialState);

  return (
    <SiteStateContext.Provider value={state}>
      <SiteDispatchContext.Provider value={dispatch}>
        {children}
      </SiteDispatchContext.Provider>
    </SiteStateContext.Provider>
  );
};

// HOOKS for our Context state!

export const useSiteState = (): SiteState => {
  const context = React.useContext(SiteStateContext);
  if (context == undefined) {
    throw new Error("useSiteState must be used within a SiteStateProvider");
  }
  return context;
};

export const useSiteDispatch = (): Dispatch => {
  const context = React.useContext(SiteDispatchContext);
  if (context == undefined) {
    throw new Error("useSiteDispatch must be used within a SiteStateProvider");
  }
  return context;
};

export default SiteProvider;
