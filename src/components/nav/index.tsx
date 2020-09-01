import * as React from "react";
import styled from "styled-components";
import { graphql, Link, useStaticQuery } from "gatsby";
import { above, below, handleFlex } from "../../utils/helpers";
import NavList from "../NavList";
import { FixedObject } from "gatsby-image";
import Img from "gatsby-image";
import ModalMenu from "./ModalMenu";
import useToggle from "../../hooks/useToggle";
import useTheme from "../../hooks/useTheme";
import ThemeSlider from "./ThemeSlider";
import { useSiteState } from "../../context/site/SiteProvider";

interface Props {
  className?: string;
}

interface ImgIcon {
  node: {
    name: string;
    childImageSharp: {
      fixed: FixedObject;
    };
  };
}

interface NavQueryProps {
  NavQuery: {
    siteMetadata: {
      title: "my story";
      sitePaths: SitePathType[];
    };
  };
  menuIcons: {
    edges: ImgIcon[];
  };
}

const Nav: React.FC<Props> = ({ className = "MainNav" }) => {
  const {
    NavQuery: {
      siteMetadata: { title, sitePaths },
    },
    menuIcons: { edges },
  } = useStaticQuery<NavQueryProps>(navQuery);

  const [appTheme, setTheme] = useTheme("theme", "LIGHT");

  const [dark, light] = edges;

  const [on, toggleOn] = useToggle();

  const { theme } = useSiteState();

  const handleSetTheme = () => {
    if (appTheme === "DARK") {
      setTheme("LIGHT");
    } else if (appTheme === "LIGHT") {
      setTheme("DARK");
    }
  };

  return (
    <nav className={className}>
      <Link to="/">
        <div className="logo">
          <h3>{title}</h3>
        </div>
      </Link>
      <NavList onSitePaths={sitePaths} />
      <div className="menuImg" onClick={toggleOn}>
        <Img
          fixed={
            theme === "DARK"
              ? dark.node.childImageSharp.fixed
              : light.node.childImageSharp.fixed
          }
        />
      </div>
      <ModalMenu on={on} onSitePaths={sitePaths} />
      <ThemeSlider
        className="ThemeSlider"
        onTheme={theme}
        onHandleSetTheme={handleSetTheme}
      />
    </nav>
  );
};

const navQuery = graphql`
  {
    NavQuery: site {
      siteMetadata {
        title
        sitePaths {
          name
          path
        }
      }
    }
    menuIcons: allFile(filter: { relativeDirectory: { eq: "menu" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(quality: 90, width: 45) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default styled(Nav)`
  padding: 1rem 0.5rem;
  height: 12em;
  ${handleFlex("row", "space-between", "center")};
  position: relative;
  background: ${props => props.theme.colors.text};
  .menuImg {
    position: absolute;
    top: 1em;
    right: 2em;
    cursor: pointer;
    z-index: 6;
  }
  .logo {
    ${handleFlex("row", "flex-start", "center")};
    flex: 1;
    text-align: center;
    height: 5em;
    padding: 1em 0;
    h3 {
      margin-bottom: 3rem;
      color: ${props => props.theme.colors.background};
    }
    ${above.medium`
      ${handleFlex("row", "center", "center")};
    `}
    ${below.medium`
      h3{
        margin-left: 1em;
      }
    `}
  }
  ${above.medium`

      .menuImg{
         display: none;
        }
  `}
`;
