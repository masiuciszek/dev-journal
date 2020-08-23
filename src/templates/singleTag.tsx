import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../components/layout";
import SiteProvider from "../context/site/SiteProvider";
import Title from "../components/Title";
import styled from "styled-components";
import { Page, TagsList } from "../components/styled/Page";
import { handleFlex } from "../utils/helpers";

type Post = {
  frontmatter: FrontMatter;
  excerpt: string;
  body: string;
};

interface PageContext {
  posts: Array<Post>;
  tag: string;
}

interface Data {
  Post: {
    frontMatter: FrontMatter;
  };
}

const PostList = styled(TagsList)`
  margin: 2rem auto;
  ${handleFlex("column", "center", "center")};
  li {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    margin: 1rem 0;
    background: transparent;
    border-bottom: 3px solid ${({ theme }) => theme.colors.text};
  }
  p {
    color: ${props => props.theme.colors.background};
    font-size: 0.8em;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const SingleTagTemplate: React.FC<PageProps<Data, PageContext>> = ({
  data,
  pageContext,
}) => {
  return (
    <SiteProvider>
      <Layout>
        <Page>
          <Title
            className="Single-tag-title"
            title={` ${pageContext.tag} post's`}
            center
          />

          <PostList>
            {pageContext.posts.map(post => (
              <li key={post.frontmatter.path}>
                <Link to={`/posts${post.frontmatter.path}`}>
                  <p>{post.frontmatter.title}</p>
                  <p>{post.frontmatter.date}</p>
                  <p>{post.frontmatter.spoiler}</p>
                </Link>
              </li>
            ))}
          </PostList>
        </Page>
      </Layout>
    </SiteProvider>
  );
};

export const PAGE_QUERY = graphql`
  query($tag: [String]!) {
    Post: mdx(frontmatter: { tags: { in: $tag } }) {
      frontmatter {
        title
        path
        date(formatString: "MMMM DD, YY")
        spoiler
      }
    }
  }
`;

export default SingleTagTemplate;
