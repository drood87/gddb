import React, { Component } from 'react';
import axios from 'axios';

import Game from './game';

class GamesList extends Component {
  state = {
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
          'user-key': '',
        },
        data: 'fields developed,logo,name,published.name,published.cover.url;where id = 51;limit 50;',
      });
      this.setState({
        gameName: res.data[0].published.map(item => item.name),
        cover: res.data[0].published.map(item => (item.cover === undefined ? 'https://placeimg.com/640/480/any' : item.cover)),
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { gameName } = this.state;
    const { cover } = this.state;

    // get the URLS from the cover images
    const coverUrl = cover.map(url => url.url);

    // replace thumbnail images with 720p images and replace undefined image with other cover

    const biggerCovers = coverUrl.map(string => (string === undefined
      ? '//images.igdb.com/igdb/image/upload/t_720p/co1hec.jpg'
      : string.replace(/t_thumb/, 't_720p')));

    return (
      <div>
        {gameName.map((name, i) => (
          <Game gameName={name} key={name} img={biggerCovers[i]} />
        ))}
      </div>
    );
  }
}

export default GamesList;
