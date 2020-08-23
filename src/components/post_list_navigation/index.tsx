import * as React from "react";
import styled from "styled-components";
import { handleFlex } from "../../utils/helpers";
import { PrevNextLink } from "../styled/Page";

interface Props {
  numPages: number;
  currentPage: number;
}

const NavigationTab = styled.section`
  ${handleFlex("row", "space-evenly", "center")};
  box-shadow: ${props => props.theme.shadow.elevations[3]};
  margin: 4rem 0 2rem 0;
  padding: 1rem;
`;

interface LinkProps {
  isactive: string;
}
const InsideLink = styled(PrevNextLink)<LinkProps>`
  padding: 0 0.8rem;
  border: 2px solid transparent;
  background: ${({ theme, isactive }) =>
    isactive === "true" ? theme.colors.button : theme.colors.text};
  color: ${({ theme, isactive }) =>
    isactive === "true" ? theme.colors.text : theme.colors.background};
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.text};
  }
`;

const PostListNavigation = ({ numPages, currentPage }: Props) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <NavigationTab className="navigation">
      {!isFirst && (
        <PrevNextLink to={`/posts/${prevPage}`}> ← Prev </PrevNextLink>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <li key={i + 1}>
          <InsideLink
            to={`/posts/${i === 0 ? "" : i + 1}`}
            isactive={currentPage === i + 1 ? "true" : "false"}
          >
            {i + 1}
          </InsideLink>
        </li>
      ))}
      {!isLast && (
        <PrevNextLink to={`/posts/${nextPage}`}> Next → </PrevNextLink>
      )}
    </NavigationTab>
  );
};
export default PostListNavigation;
