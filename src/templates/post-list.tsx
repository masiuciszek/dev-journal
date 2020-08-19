import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import SiteProvider from "../context/site/SiteProvider";
import styled from "styled-components";
import Post from "../components/blog/Post";
import { Page } from "../components/styled/Page";

interface Edges {
  node: {
    frontmatter: FrontMatter;
    excerpt: string;
  };
}

interface Posts {
  POSTS: {
    edges: Array<Edges>;
  };
}

const PostList = styled.section`
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadow.elevations[1]};
  height: 100%;
`;

const PostListTemplate: React.FC<PageProps<Posts>> = ({ data }) => {
  const { edges } = data.POSTS;
  return (
    <SiteProvider>
      <Layout>
        <Page>
          <PostList>
            {edges.map(({ node }) => (
              <Post key={node.frontmatter.date} postData={node} />
            ))}
          </PostList>
        </Page>
      </Layout>
    </SiteProvider>
  );
};

export const PAGE_QUERY = graphql`
  query($skip: Int!, $limit: Int!) {
    POSTS: allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
            spoiler
            tags
          }
        }
      }
    }
  }
`;

export default PostListTemplate;
