import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import {
  PostStyles,
  PostHead,
  PostNavigation,
  PrevNextLink,
} from "../components/styled/Page";
import SiteProvider from "../context/site/SiteProvider";
import { MDXRenderer } from "gatsby-plugin-mdx";

interface Data {
  SinglePost: {
    frontmatter: FrontMatter;
    body: string;
  };
}

interface Node {
  frontmatter: FrontMatter;
  excerpt: string;
  body: string;
  postPath: string;
}
interface PageContextData {
  postPath: string;
  prev: null | Node;
  next: null | Node;
}

const PostItemTemplate: React.FC<PageProps<Data, PageContextData>> = ({
  data,
  pageContext,
}) => {
  const {
    frontmatter: { title, spoiler, date },
    body,
  } = data.SinglePost;

  const { next: prev, prev: next, postPath } = pageContext;

  const isPrev = prev === null;
  const isNext = next === null;

  console.log(isPrev, isNext);

  return (
    <SiteProvider>
      <Layout>
        <PostStyles>
          <PostHead>
            <h1>{title}</h1>
            <p>
              <span>{date}</span>
              {spoiler}
            </p>
          </PostHead>

          <MDXRenderer>{body}</MDXRenderer>

          <PostNavigation>
            {/* NEXT */}
            {prev && (
              <PrevNextLink to={`/posts${prev.frontmatter.path}`}>
                {" "}
                {prev.frontmatter.title}{" "}
              </PrevNextLink>
            )}

            {/* PREV */}
            {next && (
              <PrevNextLink to={`/posts${next.frontmatter.path}`}>
                {" "}
                {next.frontmatter.title}{" "}
              </PrevNextLink>
            )}
          </PostNavigation>
        </PostStyles>
      </Layout>
    </SiteProvider>
  );
};

export const PAGE_QUERY = graphql`
  query($postPath: String!) {
    SinglePost: mdx(frontmatter: { path: { eq: $postPath } }) {
      frontmatter {
        title
        date(formatString: "dddd, MMMM Do YYYY")
        spoiler
        tags
        path
      }
      body
    }
  }
`;

export default PostItemTemplate;
