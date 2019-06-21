module.exports = {
  siteMetadata: {
    title: 'Blizz Games DB',
    description: 'Look up games with descriptions, screenshots and Ratings',
    author: '@dan bernstein',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-source-apiserver',
      options: {
        // Type prefix of entities from server
        typePrefix: 'internal__',

        // The url, this should be the endpoint you are attempting to pull data from
        url: 'http://localhost:8010/proxy/companies',

        method: 'POST',

        headers: {
          Accept: 'application/json',
          'user-key': 'cc9c2b79c9b903c7e5c5dd721c77fb17',
        },

        // Request body
        data: 'fields name,published.name,published.cover.url,published.slug;where id = 51;',

        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        name: 'data',

        // Nested level of entities in response object, example: `data.posts`
        // entityLevel: 'data.games',

        // Define schemaType to normalize blank values
        // example:
        // const postType = {
        //   id: 1,
        //   name: 'String',
        //   published: true,
        //   object: {a: 1, b: '2', c: false},
        //   array: [{a: 1, b: '2', c: false}]
        // }
        // schemaType: postType,

        // Simple authentication, if optional, set it null
        auth: {
          username: null,
          password: null,
        },

        // Optionally save the JSON data to a file locally
        // Default is false
        localSave: true,

        //  Required folder path where the data should be saved if using localSave option
        //  This folder must already exist
        path: `${__dirname}/src/data/`,

        // Optionally include some output when building
        // Default is false
        verboseOutput: true, // For debugging purposes

        // Optionally skip creating nodes in graphQL.  Use this if you only want
        // The data to be saved locally
        // Default is false
        skipCreateNode: false, // skip import to graphQL, only use if localSave is all you want
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.svg', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
