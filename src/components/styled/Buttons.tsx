import { Link } from "gatsby";
import styled from "styled-components";

export const StyledLink = styled(Link)`
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
