import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import SiteProvider from "../context/site/SiteProvider";
import Post from "../components/blog/Post";
import { Page } from "../components/styled/Page";
import PostListNavigation from "../components/post_list_navigation";

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
          {edges.map(({ node }) => (
            <Post key={node.frontmatter.title} postData={node} />
          ))}
          <PostListNavigation currentPage={currentPage} numPages={numPages} />
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
