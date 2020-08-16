import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

interface Props {
  title?: string;
  desc?: string;
  image?: string;
  article?: string;
}

interface SeoQueryType {
  SEO: {
    siteMetadata: {
      author: string;
      title: string;
      titleTemplate: string;
      description: string;
      image: string;
      url: string;
      twitterUsername: string;
    };
  };
}

function SEO({ title, desc, image, article }: Props) {
  const {
    SEO: { siteMetadata },
  } = useStaticQuery<SeoQueryType>(SeoQuery);

  const { pathname } = useLocation();

  const seo = {
    title: title || siteMetadata.title,
    desc: desc || siteMetadata.description,
    image: `${siteMetadata.url}${image || siteMetadata.image}`,
    url: `${siteMetadata.url}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={siteMetadata.titleTemplate}>
      <meta name="description" content={seo.desc} />
      <meta name="image" content={seo.image} />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Work+Sans:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
        rel="stylesheet"
      />

      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.desc && <meta property="og:description" content={seo.desc} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {siteMetadata.twitterUsername && (
        <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.desc && <meta name="twitter:description" content={seo.desc} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
}

const SeoQuery = graphql`
  {
    SEO: site {
      siteMetadata {
        author
        title
        titleTemplate
        description
        image
        url
        twitterUsername
      }
    }
  }
`;

export default SEO;
