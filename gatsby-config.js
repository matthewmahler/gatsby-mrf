const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: 'My Rising Fall',
    author: 'Matt Mahler',
    description: 'Album Out 4/20/69',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'My-Rising-Fall',
        short_name: 'MRF',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/mrf-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `myrisingfallsucks`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
