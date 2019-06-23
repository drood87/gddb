// @ts-nocheck
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Layout from './layout';

export default class GameDetail extends Component {
  // get context from gatsby node query and created pages
  state = {
    image: this.props.pageContext.image,
    id: this.props.pageContext.id,
    result: [],
    name: this.props.pageContext.name,
  };

  // fetch details of requested game
  async componentDidMount() {
    try {
      const { id } = this.state;
      const res = await axios({
        url: 'http://localhost:8010/proxy/games',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'user-key': 'cc9c2b79c9b903c7e5c5dd721c77fb17',
        },
        data: `fields *;where id = ${id};`,
      });
      // save results into state
      this.setState({
        result: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    // destructure states
    const { name, result, image } = this.state;
    const unixTimestamp = result.map(date => date.first_release_date);

    return (
      <Layout>
        <img src={`${image}`} alt={`${name} cover`} />
        <h1>{name}</h1>
        <p>
          <Moment unix format="DD/MM/YYYY">
            {unixTimestamp}
          </Moment>
        </p>
        <p>{result.map(item => item.summary)}</p>
      </Layout>
    );
  }
}

GameDetail.propTypes = {
  pageContext: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
