import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { above, handleFlex } from "../../utils/helpers";

const QUERY = graphql`
  {
    site {
      siteMetadata {
        title
        sitePaths {
          name
          path
        }
        socialList {
          name
          account
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
      socialList: SocialType[];
    };
  };
}

const FooterTitle = styled.div``;

const Footer = ({ className = "main-footer" }: Props) => {
  const {
    site: {
      siteMetadata: { sitePaths, socialList, title },
    },
  } = useStaticQuery<QueryType>(QUERY);

  return (
    <footer className={className}>
      <FooterTitle>
        <h3>{title}</h3>
      </FooterTitle>
      <div className="bob">
        <div className="one">
          <h1>test</h1>
        </div>
        <div className="two">
          <h1>test</h1>
        </div>
      </div>
    </footer>
  );
};
export default styled(Footer)`
  ${handleFlex("column", "center", "center")};
  ${above.medium`
    /* height: 7em; */
    ${handleFlex("row", "space-between", "center")};
  `}
`;
