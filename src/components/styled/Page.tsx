import { Link } from "gatsby";
import styled from "styled-components";
import { above, handleFlex } from "../../utils/helpers";

interface PageProps {
  height?: string;
}

export const Page = styled.div<PageProps>`
  /* ${handleFlex("row", "space-between", "center")}; */
  /* height: ${({ height }) => (height ? height : "100%")}; */
  width: 100%;
  margin: 0 auto;
  ${above.small`
    max-width: ${props => props.theme.size.maxWidth};
  `}
`;

export const PostStyles = styled.article`
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
`;

export const PostHead = styled.section`
  ${handleFlex("column", "center", "center")};

  padding: 1rem 2rem;
  width: 90%;
  margin: 0 auto;
  h1 {
    border-bottom: 3px solid ${props => props.theme.colors.text};
  }
  p {
    span {
      background: ${({ theme }) => theme.colors.button};
      color: #333;
      padding: 0.4rem;
      border-radius: 4px;
      box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
      margin-right: 0.25rem;
    }
  }
`;

export const PostNavigation = styled.div`
  ${handleFlex("row", "space-around", "center")}
  margin: 2rem auto 1rem auto;
  width: 100%;
  ${above.medium`
      width: 80%;
  `}
`;

export const PrevNextLink = styled(Link)`
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.text};
  padding: 0.5rem;
  border-radius: 4px;
  box-shadow: ${props => props.theme.shadow.elevations[4]};
  display: block;
  transition: ${({ theme }) => theme.transition.quickTransition};
  &:hover {
    color: #333;
    background: ${({ theme }) => theme.colors.button};
  }
`;
