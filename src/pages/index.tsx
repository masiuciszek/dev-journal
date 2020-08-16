import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import Title from "../components/Title";

const IndexPage = () => (
  <Layout>
    <Hero className="Home-Hero">
      <Title className="Home-Title" title="My Story" />
      <div>
        <h1>some other text</h1>
      </div>
    </Hero>
  </Layout>
);

export default IndexPage;
