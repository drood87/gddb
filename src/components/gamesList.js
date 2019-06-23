/* eslint-disable max-len */
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Game from './game';

const GamesList = () => (
  <GameGrid>
    <StaticQuery
      query={GAMES_QUERY}
      render={({ allInternalData }) => allInternalData.edges[0].node.published.map(edge => (
        <>
          <Game
            key={edge.alternative_id}
            id={edge.alternative_id}
            name={edge.name}
            slug={edge.slug}
            img={
              edge.cover === null
                ? '//images.igdb.com/igdb/image/upload/t_cover_big/co1hec.jpg'
                : edge.cover.url.replace(/t_thumb/, 't_cover_big')
            }
          />
        </>
      ))
      }
    />
  </GameGrid>
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
              image_id
            }
          }
        }
      }
    }
  }
`;

const GameGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
`;
