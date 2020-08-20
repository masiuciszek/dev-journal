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

  .navigation {
  }
`;

interface PageContextData {
  limit: number;
  skip: number;
  numPages: number;
  currentPage: number;
}

const PostListTemplate: React.FC<PageProps<Posts, PageContextData>> = ({
  data,
  pageContext,
}) => {
  const { edges } = data.POSTS;
  const { currentPage, numPages } = pageContext;
  return (
    <SiteProvider>
      <Layout>
        <Page>
          <PostList>
            {edges.map(({ node }) => (
              <Post key={node.frontmatter.date} postData={node} />
            ))}
            <div className="navigation"></div>
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
