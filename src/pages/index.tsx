import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import Title from "../components/Title";

const IndexPage = () => (
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
);

export default IndexPage;
