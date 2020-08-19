import { Link } from "gatsby";
import React from "react";

import styled from "styled-components";
import { handleFlex } from "../../utils/helpers";

interface Props {
  postData: {
    frontmatter: FrontMatter;
    excerpt: string;
  };
}

const PostStyles = styled.article`
  padding: 1rem 0;
  &:not(:first-child) {
    margin: 2rem 0;
  }
`;

const PostHeader = styled.div`
  ${handleFlex("row", "flex-start", "center")};
  position: relative;
  height: 4em;

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

  .tags {
    ${handleFlex("row", "space-between", "flex-start")};
    text-align: center;
    width: 8em;
    margin-left: auto;
    box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
    border-radius: 4px;
    li {
      text-align: center;
      padding: 0 0.2em;
      width: 100%;

      a {
        display: block;
        text-align: center;
      }
    }
  }
`;

const Post = ({ postData }: Props) => {
  const { title, date, spoiler, tags } = postData.frontmatter;

  return (
    <PostStyles>
      <PostHeader>
        <strong>postad at {date} </strong> <p>{spoiler}</p>
        <ul className="tags">
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`/keyword/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </PostHeader>
    </PostStyles>
  );
};

export default Post;
