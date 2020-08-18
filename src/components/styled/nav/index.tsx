import * as React from "react";
import styled from "styled-components";
import { graphql, Link, useStaticQuery } from "gatsby";
import { above, below, handleFlex } from "../../../utils/helpers";
import NavList from "./Nav.list";
import { FixedObject } from "gatsby-image";
import Img from "gatsby-image";
import ModalMenu from "./Modal.menu";
import useToggle from "../../../hooks/useToggle";
import useTheme from "../../../hooks/useTheme";
import { useSiteState } from "../../../context/site/Site.provider";

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

interface Path {
  name: string;
  path: string;
}

interface NavQueryProps {
  NavQuery: {
    siteMetadata: {
      title: "my story";
      sitePaths: Path[];
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

  const [themeOption, setTheme] = useTheme("theme", "LIGHT");

  const [dark, light] = edges;

  const [on, toggleOn] = useToggle();

  console.log(themeOption);

  React.useEffect(() => {
    setTheme(themeOption);
  }, [themeOption]);

  const { theme } = useSiteState();

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
              ? light.node.childImageSharp.fixed
              : dark.node.childImageSharp.fixed
          }
        />
      </div>
      <ModalMenu on={on} onSitePaths={sitePaths} />
      <div className="menuToggle">
        {themeOption === "LIGHT" ? (
          <>
            <span className="dark" onClick={() => setTheme("DARK")}>
              Dark
            </span>
          </>
        ) : (
          <>
            <span className="light" onClick={() => setTheme("LIGHT")}>
              Light
            </span>
          </>
        )}
      </div>
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

  .menuToggle {
    cursor: pointer;
  }
`;
