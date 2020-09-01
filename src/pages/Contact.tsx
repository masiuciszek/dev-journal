import React from "react";
import ContactComponents from "../components/contact";
import Layout from "../components/layout";
import { Page, PushDown } from "../components/styled/Elements";
import Title from "../components/Title";
import SiteProvider from "../context/site/SiteProvider";

const ContactPage = (): JSX.Element => {
  return (
    <SiteProvider>
      <Layout title="Contact">
        <Title
          className="contact-page-title"
          title="Contact me"
          text="To get in touch 🚀😎"
          center
        />
        <Page>
          <ContactComponents />
          <PushDown padding={3} />
        </Page>
      </Layout>
    </SiteProvider>
  );
};

export default ContactPage;
