import React from "react";
import createTags from "../../utils/createTags";

interface Edges {
  node: {
    frontmatter: FrontMatter;
  };
}

type EdgeList = Array<Edges>;

interface Props {
  edges: EdgeList;
}

const TagsNavigation = ({ edges }: Props) => {
  const tagsList = Object.keys(createTags(edges));

  console.log("tagsList ", tagsList);
  // TODO: fix the tag navigation
  // console.log("tagsList ", Object.values(tagsList));
  return (
    <div>
      <h1>TagsList</h1>
    </div>
  );
};

export default TagsNavigation;
