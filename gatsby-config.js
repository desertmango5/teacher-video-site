require('dotenv').config({ path: './.env.development' })
const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: `Miss Kelly's Classroom`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
};
