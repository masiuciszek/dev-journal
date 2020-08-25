/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { graphql, useStaticQuery } from "gatsby";
import SocialItem from "./SocialItem";

const QUERY = graphql`
  {
    socialListData: site {
      siteMetadata {
        socialList {
          name
          acount
        }
      }
    }
  }
`;

interface Props {
  on: boolean;
}
interface SocialItemData {
  name: SocialName;
  acount: string;
}
interface SocialDataQuery {
  socialListData: {
    siteMetadata: {
      socialList: SocialItemData[];
    };
  };
}

const StyledSocial = styled(animated.article)`
  padding: 0.5m 1em;
  h3 {
    font-size: 2em;
    border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
  }
`;

const SocialList = ({ on }: Props) => {
  const { socialListData } = useStaticQuery<SocialDataQuery>(QUERY);

  const { x } = useSpring({
    x: on ? 0 : 100,
  });
  return (
    <StyledSocial
      style={{ transform: x.interpolate(x => `translate3d(${x * -1}%,0,0)`) }}
    >
      <h3>SocialList</h3>
      {socialListData.siteMetadata.socialList.map(social => (
        <SocialItem key={social.name} onSocial={social} />
      ))}
    </StyledSocial>
  );
};

export default SocialList;
