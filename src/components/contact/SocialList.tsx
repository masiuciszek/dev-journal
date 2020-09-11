/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import SocialItem from "./SocialItem";
import { motion } from "framer-motion";

const QUERY = graphql`
  {
    socialListData: site {
      siteMetadata {
        socialList {
          name
          account
        }
      }
    }
  }
`;

interface SocialType {
  name: SocialName;
  account: string;
}
interface SocialDataQuery {
  socialListData: {
    siteMetadata: {
      socialList: SocialType[];
    };
  };
}

const StyledSocial = styled(motion.article)`
  padding: 0.5m 1em;
  h3 {
    font-size: 2em;
    border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
  }
`;

const SocialList = () => {
  const { socialListData } = useStaticQuery<SocialDataQuery>(QUERY);
  const variants = {
    closed: { x: "-100%", opacity: 0 },
    open: { x: 0, opacity: 1, transition: { delay: 0.8 } },
  };
  return (
    <StyledSocial initial="closed" animate="open" variants={variants}>
      <h3>Social Platforms</h3>
      {socialListData.siteMetadata.socialList.map(social => (
        <SocialItem key={social.name} onSocial={social} />
      ))}
    </StyledSocial>
  );
};

export default SocialList;
