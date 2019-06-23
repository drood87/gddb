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
                screenshots {
                  image_id
                  alternative_id
                }
                cover {
                  url
                }
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
            screenshots:
              details.screenshots === null
                ? '//images.igdb.com/igdb/image/upload/t_screenshot_huge/sc5jl1.jpg'
                : `//images.igdb.com/igdb/image/upload/t_screenshot_huge/${details.screenshots[0].image_id}.jpg`,
            image:
              details.cover === null
                ? '//images.igdb.com/igdb/image/upload/t_cover_big/co1hec.jpg'
                : details.cover.url.replace(/t_thumb/, 't_cover_big'),
            backdrop:
              details.cover === null
                ? '//images.igdb.com/igdb/image/upload/t_screenshot_huge/co1hec.jpg'
                : details.cover.url.replace(/t_thumb/, 't_screenshot_huge'),
          },
        });
      });
      resolve();
    });
  });
};
