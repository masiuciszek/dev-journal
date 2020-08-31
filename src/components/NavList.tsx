/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import styled from "styled-components";
import { above, handleFlex } from "../utils/helpers";
import { HoverLink } from "./styled/Link";

interface Props {
  onSitePaths: SitePathType[];
}

interface StyledListProps {
  onLarge?: boolean;
  onSmall?: boolean;
}

const StyledList = styled.ul<StyledListProps>`
  display: none;
  flex: 2;
  height: 5em;
  li {
    padding: 1em 0.5em;
  }

  ${above.medium`
    ${handleFlex("row", "space-evenly", "center")};
  `}
`;

const NavList = ({ onSitePaths }: Props) => {
  return (
    <StyledList>
      {onSitePaths.map(({ name, path }) => (
        <li key={name}>
          <HoverLink to={path}>{name}</HoverLink>
        </li>
      ))}
    </StyledList>
  );
};

export default NavList;
