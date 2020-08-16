import * as React from "react";
import BackgroundImage, { IFluidObject } from "gatsby-background-image";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { below, handleFlex } from "../utils/helpers";

interface Props {
  className: string;
}

interface HeroQueryType {
  Hero: {
    childImageSharp: {
      fluid: IFluidObject;
    };
  };
}

const Wrapper = styled.section`
  ${handleFlex("row", "space-between", "center")};
  height: 100%;
  width: 80%;
  margin: 0 auto;
  ${below.medium`
    ${handleFlex("column", "center", "center")};
    width: 100%;
  `}
`;

const Hero: React.FC<Props> = ({ children, className }) => {
  const {
    Hero: { childImageSharp },
  } = useStaticQuery<HeroQueryType>(heroQuery);
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={childImageSharp.fluid}
    >
      <Wrapper>{children}</Wrapper>
    </BackgroundImage>
  );
};

const heroQuery = graphql`
  {
    Hero: file(relativePath: { eq: "hero2.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default styled(Hero)`
  width: 100%;
  height: 80vh;
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;
`;
