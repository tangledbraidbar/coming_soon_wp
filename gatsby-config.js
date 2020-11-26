module.exports = {
  pathPrefix: "/coming_soon_wp",
  siteMetadata: {
    title: `Tangled Braid Bar`,
    description: `Tangled Braid Bar, Coming Soon...`,
    author: `Shayla Michelle`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Dancing Script`,
          `Bebas Neue`,
        ],
        display: 'block'
      }
    }
  ],
}
