import * as React from "react";
import styled from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useSiteState } from "../../context/site/SiteProvider";
import { theme as themeLight, themeDark } from "../../utils/theme";
import SEO from "../Seo";
import Nav from "../nav";

interface Props {
  title?: string;
}

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
      box-sizing: inherit;
    }

  html {
    box-sizing: border-box;
    font-size: ${props => props.theme.appSize}; /**16px */
  }

  body {
    background-color: ${props => props.theme.colors.background};
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    line-height: 1.65;
    padding: 0;
    margin: 0;
    color: ${props => props.theme.colors.text};
  }
  a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.size.a};;
    }
  ul,li{
    list-style: none;
  }
  button {
      font-family: 'Space Mono', monospace;
      font-weight: 300;
     }


     h1, h2, h3, h4, h5
  {
    margin: 2.75rem 0 1.05rem;
    font-family: 'Space Mono', monospace;
    font-weight: 400;
    line-height: 1.15;
    color: ${({ theme }) => theme.colors.text};
  }

  h1{
    font-size: ${({ theme }) => theme.size.h1};
  }
  h2{
    font-size: ${({ theme }) => theme.size.h2};
  }
  h3{
    font-size: ${({ theme }) => theme.size.h3};
  }
  h4{
    font-size: ${({ theme }) => theme.size.h4};
  }
  h5{
    font-size: ${({ theme }) => theme.size.h5};
  }

  small {
      font-size: 0.8em;
      }
  p{
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.size.p};
  }
`;

const Main = styled.main`
  margin: 0 auto;
`;

const Layout: React.FC<Props> = ({ children, title }) => {
  const { theme } = useSiteState();

  return (
    <ThemeProvider theme={theme === "DARK" ? themeDark : themeLight}>
      <SEO title={title} />
      <GlobalStyles />
      <Nav />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};
export default Layout;
// <ThemeProvider theme={isDark ? themeDark : themeLight}>
