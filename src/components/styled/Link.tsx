import { Link } from "gatsby";
import styled from "styled-components";

export const HoverLink = styled(Link)`
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
`;
