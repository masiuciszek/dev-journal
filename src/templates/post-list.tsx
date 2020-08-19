import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import SiteProvider from "../context/site/SiteProvider";

interface Props {}

const PostListTemplate: React.FC<Props> = () => {
  return (
    <SiteProvider>
      <Layout>
        <h1> Legia CWSKS </h1>{" "}
      </Layout>
    </SiteProvider>
  );
};

// export const PAGE_QUERY = graphql`

// `;

export default PostListTemplate;
