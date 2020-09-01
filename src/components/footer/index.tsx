import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { above, below, handleFlex } from "../../utils/helpers";
import NavigationList from "../NavigationList";

const QUERY = graphql`
  {
    site {
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

interface Props {
  className?: string;
}

interface QueryType {
  site: {
    siteMetadata: {
      title: string;
      sitePaths: SitePathType[];
    };
  };
}

const FooterTitle = styled.div`
  text-align: center;
  flex: 1;
  ${handleFlex("row", "flex-start", "center")};
  h3 {
    color: ${props => props.theme.colors.background};
    text-align: center;
  }
  ${below.medium`
  `}
  ${below.small`
    h3{
      width: 100%;
    }

  `}
`;

const Footer = ({ className = "main-footer" }: Props) => {
  const {
    site: {
      siteMetadata: { sitePaths, title },
    },
  } = useStaticQuery<QueryType>(QUERY);

  return (
    <footer className={className}>
      <FooterTitle>
        <h3>{title}</h3>
      </FooterTitle>
      <NavigationList onSitePaths={sitePaths} />
    </footer>
  );
};
export default styled(Footer)`
  ${handleFlex("column", "center", "center")};
  background: ${props => props.theme.colors.text};
  ${above.medium`
    ${handleFlex("row", "space-between", "center")};
    height: 8em;
  `}
`;
