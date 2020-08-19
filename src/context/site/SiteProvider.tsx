import * as React from "react";

export interface SiteState {
  theme: Theme;
}

export const initialState: SiteState = {
  theme: "LIGHT",
};

interface SetTheme {
  type: "SET_THEME";
  payload: Theme;
}

export type Action = SetTheme;

export type Dispatch = (action: Action) => void;

const SiteStateContext = React.createContext<SiteState | undefined>(undefined);
const SiteDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

const siteReducer = (state: SiteState = initialState, action: Action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    default: {
      throw new Error(`Unable action type `);
    }
  }
};

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
