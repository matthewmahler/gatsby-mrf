const path = require(`path`)
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log(
  process.env.CONTENTFUL_SPACE_ID,
  process.env.CONTENTFUL_ACCESS_TOKEN
)

module.exports = {
  siteMetadata: {
    title: 'My Rising Fall',
    author: 'Matt Mahler',
    description: 'Album Out Summer 2019',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'My-Rising-Fall',
        short_name: 'MRF',
        start_url: '/',
        background_color: '#111111',
        theme_color: '#111111',
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
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '2wsyc8pcn7li',
        accessToken:
          '73ff934d37b35f39e372959fdd76e64206351bbdce0b7ae56eac34d29276cdd0',
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: '1424456392.1677ed0.2e4f1ad1a7c44b0581a1cdf8659a2abf',
      },
    },
    'gatsby-plugin-offline',
  ],
}
