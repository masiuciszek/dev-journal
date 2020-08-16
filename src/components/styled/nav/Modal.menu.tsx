import { Link } from "gatsby";
import * as React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { handleFlex } from "../../../utils/helpers";

interface Path {
  name: string;
  path: string;
}

interface Props {
  on: boolean;
  onSitePaths: Path[];
}

const MenuStyles = styled(animated.section)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.colors.rgbaDark};
  ${handleFlex("column", "center", "center")};
  z-index: 5;
  li {
    padding: 1em;
  }
  a {
    font-size: 2em;
    text-transform: capitalize;
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
`;

const ModalMenu = ({ on, onSitePaths }: Props) => {
  const { x, opacity } = useSpring({
    x: on ? 0 : 100,
    opacity: on ? 1 : 0,
  });
  return (
    <MenuStyles
      style={{
        opacity,
        transform: x.interpolate(x => `translate3d(${x * 1}%,0,0)`),
      }}
    >
      {onSitePaths.map(({ name, path }) => (
        <li key={name}>
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </MenuStyles>
  );
};
export default ModalMenu;
