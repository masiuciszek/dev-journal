import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { handleFlex } from "../utils/helpers";

interface Props {
  title: string;
  text?: string;
  ctaText?: string;
  cta?: boolean;
  className: string;
  center?: boolean;
}

const StyledLink = styled(Link)`
  border: 2px solid ${({ theme }) => theme.colors.text};
  padding: 0.5em;
  width: 7em;
  text-align: center;
  display: block;
  text-transform: capitalize;
  transition: ${({ theme }) => theme.transition.mainTransition};
  border-radius: 4px;
  ${({ theme }) => theme.shadow.elevations[3]};
  text-shadow: 1px 1px 1px #333;
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};
  margin: 1rem 0;
  &:hover {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    ${({ theme }) => theme.shadow.elevations[4]};
  }
  &:active {
    position: relative;
    top: 8px;
  }
`;

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
  width: ${({ center }) => (center ? "20em" : "100%")};
  h1,
  p {
    text-shadow: 1px 1px 1px #333;
    padding: 0.3rem;
    background: ${props => props.theme.colors.button};
    border-radius: 4px;
    ${({ theme }) => theme.shadow.elevations[1]};
  }
  p {
  }
`;
