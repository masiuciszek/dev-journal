import * as React from "react";
import styled from "styled-components";
import { handleFlex, handleSocialItem } from "../../utils/helpers";

interface Props {
  onSocial: SocialType;
}

const StyledSocialItem = styled.a`
  display: block;
  padding: 0.1rem;
  ${handleFlex("row", "center", "center")};
  font-size: 0.8em;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(50%, ${({ theme: { colors } }) => colors.background}),
    color-stop(50%, ${({ theme: { colors } }) => colors.button})
  );
  background-image: linear-gradient(
    to right,
    ${({ theme: { colors } }) => colors.background} 50%,
    ${({ theme: { colors } }) => colors.button} 50%
  );
  background-position: 0;
  background-size: 200%;
  -webkit-transition: ${({ theme }) => theme.transition.quickTransition};
  transition: ${({ theme }) => theme.transition.quickTransition};
  &:hover {
    background-position: -100%;
    box-shadow: ${({ theme }) => theme.shadow.elevations[2]};
  }
`;

const SocialItem = ({ onSocial }: Props) => {
  const { name, account } = onSocial;

  return (
    <StyledSocialItem href={account}>
      <h1>
        {onSocial.name} <span>{handleSocialItem(name)}</span>
      </h1>
    </StyledSocialItem>
  );
};
export default SocialItem;
