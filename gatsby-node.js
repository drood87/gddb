/* eslint-disable no-unused-vars */
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allInternalData(filter: { id: { ne: "dummy" } }) {
          edges {
            node {
              published {
                alternative_id
                name
                slug
              }
            }
          }
        }
      }
    `).then((results) => {
      results.data.allInternalData.edges[0].node.published.forEach((details) => {
        createPage({
          path: `/details/${details.slug}`,
          component: path.resolve('./src/components/gameDetail.js'),
          context: {
            slug: details.slug,
            id: details.alternative_id,
            name: details.name,
          },
        });
      });
      resolve();
    });
  });
};
