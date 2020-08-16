import * as React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { above, below, handleFlex } from "../../../utils/helpers";
import NavList from "./Nav.list";

interface Props {
  className?: string;
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
}

const Nav: React.FC<Props> = ({ className = "MainNav" }) => {
  const {
    NavQuery: {
      siteMetadata: { title, sitePaths },
    },
  } = useStaticQuery<NavQueryProps>(navQuery);

  return (
    <nav className={className}>
      <div className="logo">
        <h3>{title}</h3>
      </div>
      <NavList onSitePaths={sitePaths} />
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
  }
`;

export default styled(Nav)`
  border: 2px solid red;
  padding: 1rem 0.5rem;
  height: 12em;
  ${handleFlex("row", "space-between", "center")};
  .logo {
    ${handleFlex("row", "flex-start", "center")};
    border: 2px solid green;
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
`;
