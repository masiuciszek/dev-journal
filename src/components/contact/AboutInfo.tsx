import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import AboutContent from "./AboutContent";

interface Props {
  on: boolean;
}

const QUERY = graphql`
  {
    aboutData: site {
      siteMetadata {
        aboutData {
          short
          desc
          desc2
        }
      }
    }
  }
`;

interface AboutData {
  aboutData: {
    siteMetadata: {
      aboutData: {
        short: string;
        desc: string;
        desc2: string;
      };
    };
  };
}

const StyledAbout = styled(animated.article)`
  padding: 0.5m 1em;
  h3 {
    font-size: 2em;
    border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
    text-align: center;
  }
`;

const AboutInfo = ({ on }: Props) => {
  const {
    aboutData: {
      siteMetadata: { aboutData },
    },
  } = useStaticQuery<AboutData>(QUERY);

  const { x } = useSpring({
    x: on ? 0 : 100,
  });

  return (
    <StyledAbout
      style={{ transform: x.interpolate(x => `translate3d(${x * 1}%,0,0)`) }}
    >
      <h3>About</h3>
      <AboutContent aboutData={aboutData} />
    </StyledAbout>
  );
};

export default AboutInfo;
