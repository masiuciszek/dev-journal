import * as React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import styled from "styled-components";
import { handleFlex } from "../../utils/helpers";

interface Path {
  name: string;
  path: string;
}

interface Props {
  on: boolean;
  onSitePaths: Path[];
}

const MenuStyles = styled(motion.ul)`
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
    color: ${({ theme }) => theme.colors.background};
    text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.text};
    &::after {
      content: "";
      background: ${({ theme }) => theme.colors.background};
      width: 1%;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: ${props => props.theme.transition.mainTransition};
      border-radius: 4px;
    }
    &:hover {
      &::after {
        ${({ theme }) => theme.shadow.elevations[3]};
        width: 100%;
        padding: 0.1rem;
      }
    }
  }
`;

const ModalMenu = ({ on, onSitePaths }: Props) => {
  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        mass: 2,
        damping: 10,
        staggerChildren: 0.3,
        delayChildren: 0.2,
        staggerDirection: -1, // -1 backwords , 1 forwards
        when: "afterChildren", // afterChildren , beforeChildren
      },
    },
    closed: { opacity: 0, x: "-100%" },
  } as const;

  return (
    <MenuStyles
      initial="closed"
      animate={on ? "open" : "closed"}
      variants={variants}
    >
      {onSitePaths.map(({ name, path }) => (
        <motion.li key={name} whileHover={{ scale: [1.1, 0.9, 1.2] }}>
          <Link to={path}>{name}</Link>
        </motion.li>
      ))}
    </MenuStyles>
  );
};
export default ModalMenu;
