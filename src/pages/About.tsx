import React from "react";
import Layout from "../components/layout";
import SiteProvider from "../context/site/SiteProvider";

const AboutPage = () => {
  return (
    <SiteProvider>
      <Layout>
        <h1>AboutPage</h1>
      </Layout>
    </SiteProvider>
  );
};

export default AboutPage;
