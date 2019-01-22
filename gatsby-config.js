module.exports = {
  siteMetadata: {
    name: `Keynotes van Bolster`,
    title: `Gatsby-deck`,
    date: `22 januari 2019`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src`,
      },
    },
  ],
};
