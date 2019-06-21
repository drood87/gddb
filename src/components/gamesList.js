import React, { Component } from 'react';
import axios from 'axios';
import { StaticQuery, graphql } from 'gatsby';

import Game from './game';

class GamesList extends Component {
  state = {
    slug: [],
    gameId: [],
    cover: [],
    gameName: [],
  };

  async componentDidMount() {
    try {
      const res = await axios({
        url: 'http://localhost:8010/proxy/companies',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'user-key': 'cc9c2b79c9b903c7e5c5dd721c77fb17',
        },
        data: 'fields name,published.name,published.cover.url,published.slug;where id = 51;',
      });
      this.setState({
        slug: res.data[0].published.map(item => item.slug),
        gameId: res.data[0].published.map(item => item.id),
        gameName: res.data[0].published.map(item => item.name),
        // eslint-disable-next-line max-len
        cover: res.data[0].published.map(item => (item.cover === undefined ? 'https://placeimg.com/640/480/any' : item.cover)),
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  render() {
    const { gameName } = this.state;
    const { cover } = this.state;
    const { gameId } = this.state;
    const { slug } = this.state;

    // get the URLS from the cover images
    const coverUrl = cover.map(url => url.url);

    // replace thumbnail images with 720p images and replace undefined image with other cover

    const biggerCovers = coverUrl.map(string => (string === undefined
      ? '//images.igdb.com/igdb/image/upload/t_720p/co1hec.jpg'
      : string.replace(/t_thumb/, 't_720p')));

    return (
      <div>
        {gameName.map((name, i) => (
          <Game gameName={name} id={gameId[i]} key={gameId[i]} img={biggerCovers[i]} slug={slug[i]} />
        ))}
      </div>
    );
  }
}

export default GamesList;

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
