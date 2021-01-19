module.exports = {
  siteMetadata: {
    title: "Vektr",
    description:
      "The new car sharing experience",
    author: "FromZeroToCicero",
    image: "/background.png",
    siteUrl: "https://fromzerotocicero-vektr.netlify.app/",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "${__dirname}/src/styles/global";`,
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
  ],
};
