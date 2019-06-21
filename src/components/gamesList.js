/* eslint-disable max-len */
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Game from './game';

const GamesList = () => (
  <StaticQuery
    query={GAMES_QUERY}
    render={({ allInternalData }) => allInternalData.edges[0].node.published.map(edge => (
      <Game
        key={edge.alternative_id}
        name={edge.name}
        slug={edge.slug}
        img={
          edge.cover === null
            ? '//images.igdb.com/igdb/image/upload/t_720p/co1hec.jpg'
            : edge.cover.url.replace(/t_thumb/, 't_720p')
        }
      />
    ))
    }
  />
);

export default GamesList;

const GAMES_QUERY = graphql`
  query GetPublishedGames {
    allInternalData(filter: { id: { ne: "dummy" } }) {
      edges {
        node {
          published {
            alternative_id
            name
            slug
            cover {
              url
            }
          }
        }
      }
    }
  }
`;
