import * as React from "react";
import { Link, PageProps } from "gatsby";
import Layout from "../components/layout";
import SiteProvider from "../context/site/SiteProvider";
import Title from "../components/Title";
import { Page, PushDown, TagsList } from "../components/styled/Elements";

interface PageContext {
  tags: string[];
}

const AllTagsTemplate: React.FC<PageProps<{}, PageContext>> = ({
  data,
  pageContext,
}) => {
  return (
    <SiteProvider>
      <Layout title="categories">
        <Page>
          <Title className="Tags-list-title" title="Category list" center />
          <TagsList>
            {pageContext.tags.map(tag => (
              <li key={tag}>
                <Link to={`/tags/${tag}`}>{tag}</Link>
              </li>
            ))}
          </TagsList>
          <PushDown padding={6} />
        </Page>
      </Layout>
    </SiteProvider>
  );
};

export default AllTagsTemplate;
