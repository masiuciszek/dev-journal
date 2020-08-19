import * as React from "react";
import { useSiteDispatch } from "../context/site/SiteProvider";
import useLocalStorage from "./useLocalStorage";

type UseThemeReturnType = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];

const useTheme = (
  themeKey: string,
  initialThemeValue: string
): UseThemeReturnType => {
  const [theme, setTheme] = useLocalStorage(themeKey, initialThemeValue);

  const dispatch = useSiteDispatch();

  React.useEffect(() => {
    if (theme === "LIGHT" || theme === "DARK") {
      dispatch({ type: "SET_THEME", payload: theme });
    }
  }, [theme]);

  return [theme, setTheme];
};
export default useTheme;
