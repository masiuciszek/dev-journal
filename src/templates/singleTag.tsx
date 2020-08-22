import * as React from "react";
import Layout from "../components/layout";
import SiteProvider from "../context/site/SiteProvider";

interface Props {}

const SingleTagTemplate: React.FC<Props> = () => {
  return (
    <SiteProvider>
      <Layout>
        <h1>Single tag</h1>
      </Layout>
    </SiteProvider>
  );
};
export default SingleTagTemplate;
