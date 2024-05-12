const dotenv = require('dotenv');

dotenv.config({
  path: '.env',
});

module.exports = {
    siteMetadata: {
      title: `Fresh Blog`,
      siteUrl: `https://fresh.blog`,
      description: `Super fast blog`,
      autor: 'Max Sat',
      fb: 'https://www.facebook.com/freshblog',
    },
    plugins: [
      'gatsby-plugin-styled-components',
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-source-sanity',
        options: {
          projectId: 'l6io5z0j',
          dataset: 'production',
          watchMode: true,
          token: process.env.SANITY_TOKEN,
        },
      },
    ],
  };