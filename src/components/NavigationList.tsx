import React from "react";
import styled from "styled-components";
import { below, handleFlex } from "../utils/helpers";
import { HoverLink } from "./styled/Link";

interface NavigationListProps {
  onSitePaths: SitePathType[];
}

const StyledNavigation = styled.ul`
  flex: 1;
  ${handleFlex("row", "space-between", "center")};
  padding: 1em 0.5em;
  height: 100%;
  li {
    a {
      color: ${props => props.theme.colors.background};
    }
  }
  ${below.medium`
    width: 20em;
  `}
  ${below.small`
    width: 100%;
  `}
`;

const NavigationList: React.FC<NavigationListProps> = ({ onSitePaths }) => {
  return (
    <StyledNavigation>
      {onSitePaths.map(({ name, path }) => (
        <li key={path}>
          <HoverLink to={path}>{name}</HoverLink>
        </li>
      ))}
    </StyledNavigation>
  );
};
export default NavigationList;
