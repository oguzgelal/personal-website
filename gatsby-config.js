const pixrem = require('pixrem');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Oguz Gelal | Personal website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          pixrem(),
          autoprefixer({
            browsers: [
              '> 1%',
              'last 2 versions'
            ]
          })
        ],
        precision: 8
      }
    },
  ],
};
