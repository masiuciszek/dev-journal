import { Action, initialState, SiteState } from "./Site.types";

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

export default siteReducer;
