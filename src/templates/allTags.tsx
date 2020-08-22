import * as React from "react";
import { Link, PageProps } from "gatsby";
import Layout from "../components/layout";
import SiteProvider from "../context/site/SiteProvider";
import Title from "../components/Title";
import { Page, TagsList } from "../components/styled/Page";

interface PageContext {
  tags: string[];
}

const AllTagsTemplate: React.FC<PageProps<{}, PageContext>> = ({
  data,
  pageContext,
}) => {
  return (
    <SiteProvider>
      <Layout>
        <Page>
          <Title className="TagsList-title" title="Tags list" center />
          <TagsList>
            {pageContext.tags.map(tag => (
              <li key={tag}>
                <Link to={`/tags/${tag}`}>{tag}</Link>
              </li>
            ))}
          </TagsList>
        </Page>
      </Layout>
    </SiteProvider>
  );
};

export default AllTagsTemplate;
