import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import AboutContent from "./AboutContent";
import { motion } from "framer-motion";

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

const StyledAbout = styled(motion.article)`
  padding: 0.5m 1em;
  h3 {
    font-size: 2em;
    border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
    text-align: center;
  }
`;

const AboutInfo = () => {
  const {
    aboutData: {
      siteMetadata: { aboutData },
    },
  } = useStaticQuery<AboutData>(QUERY);
  const variants = {
    closed: { x: "100%", opacity: 0 },
    open: { x: 0, opacity: 1, transition: { delay: 0.8 } },
  };
  return (
    <StyledAbout initial="closed" animate="open" variants={variants}>
      <h3>About</h3>
      <AboutContent aboutData={aboutData} />
    </StyledAbout>
  );
};

export default AboutInfo;
