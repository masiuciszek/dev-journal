import React from "react";
import styled from "styled-components";
import { handleFlex } from "../utils/helpers";
import { StyledLink } from "./styled/Buttons";

interface Props {
  title: string;
  text?: string;
  ctaText?: string;
  cta?: boolean;
  className: string;
  center?: boolean;
}

const Title = ({ title, text, cta, ctaText, className, center }: Props) => {
  return (
    <section className={className}>
      <h1>{title}</h1>
      {text && <p>{text}</p>}
      {cta && <StyledLink to={`/${ctaText}`}>{ctaText}</StyledLink>}
    </section>
  );
};

export default styled(Title)`
  ${handleFlex("column", "center", "flex-start")}
  padding: 1em;
  margin: ${({ center }) => (center ? "0 auto" : "0")};
  text-align: ${({ center }) => (center ? "center" : "")};
  ${({ center }) =>
    center ? `justify-content: center; align-items:center;` : ""};

  h1,
  p {
    text-shadow: 1px 1px 1px #333;
    padding: ${({ center }) => (center ? "1rem" : "0.3rem")};
    text-align: center;
    background: ${props => props.theme.colors.button};
    border-radius: 4px;
    ${({ theme }) => theme.shadow.elevations[1]};
  }
  p {
  }
`;
