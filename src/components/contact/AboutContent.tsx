import * as React from "react";
import styled from "styled-components";

interface Props {
  aboutData: {
    short: string;
    desc: string;
    desc2: string;
  };
}

const StyledAboutContent = styled.article`
  color: ${({ theme }) => theme.colors.text};

  p {
    text-align: left;
    padding: 0.1em 0.5em;
  }
`;

const AboutContent = ({ aboutData }: Props) => {
  return (
    <StyledAboutContent>
      <p>{aboutData.short}</p>
      <p>{aboutData.desc}</p>
      <p>{aboutData.desc2}</p>
    </StyledAboutContent>
  );
};
export default AboutContent;
