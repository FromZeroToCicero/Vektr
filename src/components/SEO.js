import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getSiteData);
  const {
    siteTitle,
    siteDesc,
    siteUrl,
    image,
  } = site.siteMetadata;

  return (
    <Helmet htmlAttributes={{ lang: "en " }} title={`${title} | ${description}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      {/* facebook card  */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content="1080" />
      <meta property="og:image:height" content="608" />
    </Helmet>
  );
};

export default SEO;
