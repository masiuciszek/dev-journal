import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import Title from "../components/Title";
import SiteProvider from "../context/site/Site.provider";

const IndexPage = () => {
  return (
    <SiteProvider>
      <Layout>
        <Hero className="Home-Hero">
          <Title
            className="Home-Title"
            title="Hi I am Marcell"
            text="This is my school documentation from my first internship"
            cta
            ctaText="posts"
          />
        </Hero>
      </Layout>
    </SiteProvider>
  );
};

export default IndexPage;
