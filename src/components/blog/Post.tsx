import { Link } from "gatsby";
import React from "react";

import styled from "styled-components";
import { below, handleFlex } from "../../utils/helpers";

interface Props {
  postData: {
    frontmatter: FrontMatter;
  };
}

const PostStyles = styled.article`
  position: relative;
  ${handleFlex("column", "center", "center")};
  margin: 2rem;
  h2,
  strong,
  p {
    margin-left: 1rem;
    padding: 0.3rem 0;
  }

  strong {
    color: #fff;
    background: ${props => props.theme.colors.button};
    border-radius: 4px;
    box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
    padding: 0.5rem;
    text-transform: capitalize;
    text-shadow: 1px 1px 2px #333;
  }

  h2 {
    transition: ${props => props.theme.transition.mainTransition};
    position: relative;
    &:after {
      content: "";
      transition: ${props => props.theme.transition.mainTransition};
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 0;
      height: 0;
      background: ${({ theme: { colors } }) => colors.text};
    }
    &:hover {
      &:after {
        padding: 0.1rem;
        left: 0;
        width: 100%;
        height: 2px;
      }
    }
  }
`;

const Tags = styled.ul`
  display: flex;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
  border-radius: 4px;
  padding: 1rem;
  li {
    margin: 0 0.4rem;
  }
  a {
    transition: ${props => props.theme.transition.mainTransition};
    background: ${props => props.theme.colors.text};
    border-radius: 4px;
    padding: 0.2rem 0.3rem;
    color: ${props => props.theme.colors.background};
    border-radius: 4px;
    box-shadow: ${({ theme }) => theme.shadow.elevations[3]};

    &:hover {
      box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
    }
  }
`;
const Post = ({ postData }: Props) => {
  const { title, date, spoiler, tags, path } = postData.frontmatter;

  return (
    <PostStyles>
      <Link to={`/posts${path}`}>
        <h2>{title}</h2>
      </Link>
      <strong>written {date} </strong>
      <p>{spoiler}</p>
      <Tags>
        {tags.map(tag => (
          <li key={tag}>
            <Link to={`/tags/${tag}`}>{tag}</Link>
          </li>
        ))}
      </Tags>
    </PostStyles>
  );
};

export default Post;
