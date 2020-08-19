import React from "react";
import Layout from "../components/layout";
import SiteProvider from "../context/site/SiteProvider";

const ContactPage = () => {
  return (
    <SiteProvider>
      <Layout>
        <h1>Contact</h1>
      </Layout>
    </SiteProvider>
  );
};

export default ContactPage;
