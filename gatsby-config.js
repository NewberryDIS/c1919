module.exports = {
  siteMetadata: {
    title: `Chicago 1919`,
    description: `Confronting the Race Riots`,
    author: `@digitalnewberry`,
  },
  pathPrefix: '/chicago1919',
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
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Oswald:400,500,600,700`,
          `Special Elite`
        ],
        display: 'swap'
      }
    },
    { 
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chicago 1919`,
        short_name: `c1919`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/c1919icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
