import React from "react";
import styled from "styled-components";
import { handleFlex, handleSocialItem } from "../utils/helpers";
interface Props {
  onSocialList: SocialType[];
}

const StyledSocialPlatforms = styled.ul`
  ${handleFlex("row", "space-between", "center")};
  li {
    padding: 1em 0.5em;
    flex: 1;
  }
  a {
    text-transform: capitalize;
    padding: 0.3em;
    display: block;
    transition: ${props => props.theme.transition.mainTransition};
    position: relative;
    border-radius: 0.125em;
    &::after {
      content: "";
      background: ${({ theme }) => theme.colors.text};
      width: 1%;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: ${props => props.theme.transition.mainTransition};
    }
    &:hover {
      background: ${props => props.theme.colors.button};
      color: #131313;
      box-shadow: ${props => props.theme.shadow.elevations[4]};
      &::after {
        width: 100%;
        padding: 0.1em;
      }
    }
  }
`;

const SocialPlatforms = ({ onSocialList }: Props) => {
  return (
    <StyledSocialPlatforms>
      {onSocialList.map(({ name, account }) => (
        <li key={account}>
          <a href="#">{name}</a>
        </li>
      ))}
    </StyledSocialPlatforms>
  );
};

export default SocialPlatforms;
