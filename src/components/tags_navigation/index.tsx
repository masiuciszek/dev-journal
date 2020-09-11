import { Link } from "gatsby";
import React from "react";
import { TagsList } from "../styled/Elements";
import styled from "styled-components";
import { motion } from "framer-motion";

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
          <motion.li
            key={tag}
            whileHover={{
              scale: [0.95, 0.99, 0.94, 1],
              boxShadow: [
                '"1px 2px 3px rgba(0,0,0,0.5)"',
                '"3px -6px 4px rgba(0,0,0,0.5)"',
                '"5px 2px 2px rgba(0,0,0,0.5)"',
                '"2px 3px 5px rgba(0,0,0,0.8)"',
              ],
            }}
          >
            <Link to={`/tags/${tag}`}>{tag}</Link>
          </motion.li>
        ))}
      </TagsList>
    </TagNavWrapper>
  );
};

export default TagsNavigation;
