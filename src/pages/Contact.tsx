import React from "react";
import ContactComponents from "../components/contact";
import Layout from "../components/layout";
import { Page } from "../components/styled/Page";
import Title from "../components/Title";
import SiteProvider from "../context/site/SiteProvider";

const ContactPage = () => {
  return (
    <SiteProvider>
      <Layout title="Contact">
        <Title
          className="contact-page-title"
          title="Contact me"
          text="If you want to get in touch"
          center
        />
        <Page>
          <ContactComponents />
        </Page>
      </Layout>
    </SiteProvider>
  );
};

export default ContactPage;
