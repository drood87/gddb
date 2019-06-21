/* eslint-disable max-len */
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Game from './game';

// const biggerCovers = coverUrl.map(string => (string === undefined ? '//images.igdb.com/igdb/image/upload/t_720p/co1hec.jpg' : string.replace(/t_thumb/, 't_720p')));

const GamesList = () => (
  <StaticQuery
    query={GAMES_QUERY}
    render={({ allInternalData }) => allInternalData.edges[0].node.published.map(game => (
      <Game
        key={game.alternative_id}
        name={game.name}
        img={
          game.cover.url === null
            ? '//images.igdb.com/igdb/image/upload/t_720p/co1hec.jpg'
            : game.cover.url.replace(/t_thumb/, 't_720p')
        }
      />
    ))
    }
  />
);

export default GamesList;

// class GamesList extends Component {
//   render() {
//     // replace thumbnail images with 720p images and replace undefined image with other cover

// const biggerCovers = coverUrl.map(string => (string === undefined
//   ? '//images.igdb.com/igdb/image/upload/t_720p/co1hec.jpg'
//   : string.replace(/t_thumb/, 't_720p')));

//     return (
//       // <div>
//       //   {gameName.map((name, i) => (
//       //     <Game gameName={name} id={gameId[i]} key={gameId[i]} img={biggerCovers[i]} slug={slug[i]} />
//       //   ))}
//       // </div>
//     );
//   }
// }

// export default GamesList;

const GAMES_QUERY = graphql`
  query GetPublishedGames {
    allInternalData(filter: { id: { ne: "dummy" } }) {
      edges {
        node {
          id
          name
          published {
            alternative_id
            name
            slug
            cover {
              alternative_id
              url
            }
          }
        }
      }
    }
  }
`;
