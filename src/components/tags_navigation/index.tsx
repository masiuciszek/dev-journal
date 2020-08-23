import { Link } from "gatsby";
import React from "react";
import { TagsList } from "../styled/Page";
import styled from "styled-components";

interface Props {
  tags: string[];
  istitle?: boolean;
}

const TagNavWrapper = styled.div`
  .tagnav-wrappper-title {
    text-align: center;
    padding: 0.5rem 0 2rem 0;
  }
`;

const TagsNavigation = ({ tags, istitle }: Props) => {
  return (
    <TagNavWrapper>
      {istitle && (
        <h3 className="tagnav-wrappper-title">Filter post by category</h3>
      )}
      <TagsList>
        {tags.map(tag => (
          <li key={tag}>
            <Link to={`/tags/${tag}`}>{tag}</Link>
          </li>
        ))}
      </TagsList>
    </TagNavWrapper>
  );
};

export default TagsNavigation;
