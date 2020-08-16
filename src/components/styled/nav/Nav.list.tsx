/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { above, handleFlex } from "../../../utils/helpers";

interface Path {
  name: string;
  path: string;
}

interface Props {
  onSitePaths: Path[];
}

const StyledList = styled.ul`
  border: 2px solid;
  display: none;
  flex: 2;
  height: 5em;
  li {
    padding: 1em 0.5em;
  }

  a {
    text-transform: capitalize;
    padding: 0.3em;
    display: block;
    transition: ${props => props.theme.transition.mainTransition};
    position: relative;
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
      &::after {
        width: 100%;
        padding: 0.1em;
      }
    }
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
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </StyledList>
  );
};

export default NavList;
