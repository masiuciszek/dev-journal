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
  padding: 1rem 0;
  width: 80%;
  ${handleFlex("row", "flex-start", "flex-start")};

  &:not(:first-child) {
    margin: 2rem 0;
  }
  position: relative;
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
`;

const PostHeader = styled(Link)`
  ${handleFlex("column", "flex-start", "flex-start")};
  strong,
  p {
    margin: 0.5rem;
    padding: 0.3rem;
  }
  strong {
    background: ${props => props.theme.colors.button};
    color: #3e3e3e;
    border-radius: 4px;
    box-shadow: ${({ theme }) => theme.shadow.elevations[2]};
  }
  p {
    flex: 1;
  }
`;

const Tags = styled.ul`
  ${handleFlex("row", "space-between", "center")};
  position: absolute;
  right: 0;
  top: 0;
  li {
    border-radius: 4px;
    padding: 0 0.2em;
    margin: 0 0.2em;
    box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
    a {
      text-shadow: 1px 2px 2px ${({ theme }) => theme.colors.text};
      color: ${({ theme }) => theme.colors.button};
      display: block;
    }
  }
  ${below.small`
    margin-right: auto;
  `}
`;

const Post = ({ postData }: Props) => {
  const { title, date, spoiler, tags, path } = postData.frontmatter;

  return (
    <PostStyles>
      <PostHeader to={`/posts${path}`}>
        <strong>postad at {date} </strong> <p>{spoiler}</p>
      </PostHeader>
      <Tags>
        {tags.map(tag => (
          <li key={tag}>
            <Link to={`/keyword/${tag}`}>{tag}</Link>
          </li>
        ))}
      </Tags>
    </PostStyles>
  );
};

export default Post;
