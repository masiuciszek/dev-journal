import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Title from "../components/Title";
import SiteProvider from "../context/site/SiteProvider";
import styled from "styled-components";

const LinkHome = styled(Link)`
  background: ${({ theme }) => theme.colors.button};
  color: #fff;
  text-shadow: 1px 1px 2px #333;
  display: block;
  width: 14em;
  font-size: 1.2em;
  margin: 2rem auto;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadow.elevations[2]};
  border-radius: 4px;
`;

const NotFoundPage = () => {
  return (
    <SiteProvider>
      <Layout title="ooops 404">
        <Title
          className="page-not-found-title"
          title="ooops page not found"
          center
        />
        <LinkHome to="/">Back Home 🚀</LinkHome>
      </Layout>
    </SiteProvider>
  );
};

export default NotFoundPage;
