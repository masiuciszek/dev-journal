import * as React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { above, below, handleFlex } from "../../../utils/helpers";
import NavList from "./Nav.list";
import { FixedObject } from "gatsby-image";
import Img from "gatsby-image";

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

  const [dark, light] = edges;

  return (
    <nav className={className}>
      <div className="logo">
        <h3>{title}</h3>
      </div>
      <NavList onSitePaths={sitePaths} />
      <div className="menuImg">
        <Img fixed={light.node.childImageSharp.fixed} />
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
`;
