type Theme = "LIGHT" | "DARK";

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
