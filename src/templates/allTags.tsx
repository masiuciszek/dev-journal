import * as React from "react";
import { Link, PageProps } from "gatsby";
import Layout from "../components/layout";
import SiteProvider from "../context/site/SiteProvider";
import Title from "../components/Title";
import { Page } from "../components/styled/Page";
import styled from "styled-components";

interface PageContext {
  tags: string[];
}

const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid red;
  width: 65%;
  margin: 2rem auto;
  li {
    background: ${props => props.theme.colors.text};
    padding: 0.5em;
    margin: 0.5em;
    border-radius: 4px;
    ${({ theme }) => theme.shadow.elevations[3]};
  }
  a {
    font-size: 2em;
    display: block;
    color: ${props => props.theme.colors.background};
  }
`;

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
