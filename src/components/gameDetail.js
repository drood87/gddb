// @ts-nocheck
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import Layout from './layout';
import { Cover } from './game';

export default class GameDetail extends Component {
  // get context from gatsby node query and created pages
  state = {
    screenshots: this.props.pageContext.screenshots,
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
        url: 'https://crossorigin.me/https://api-v3.igdb.com/games',
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
    const {
      name, result, image, screenshots, id,
    } = this.state;
    const unixTimestamp = result.map(date => date.first_release_date);

    return (
      <Layout>
        <GameWrapper backdropImg={`${screenshots}`}>
          <GameInfo>
            <Overdrive id={id}>
              <Cover src={`${image}`} alt={`${name} cover`} />
            </Overdrive>
            <div>
              <h1>{name}</h1>
              <p>
                <Moment unix format="DD/MM/YYYY">
                  {unixTimestamp}
                </Moment>
              </p>
              <p>{result.map(item => item.summary)}</p>
            </div>
          </GameInfo>
        </GameWrapper>
      </Layout>
    );
  }
}

GameDetail.propTypes = {
  pageContext: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    screenshots: PropTypes.string,
  }).isRequired,
};

const GameWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdropImg}) no-repeat;
  background-size: cover;
  background-position: center;
`;

const GameInfo = styled.div`
  background: #fff;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  align-items: flex-start;

  > div {
    margin-left: 20px;
  }

  img {
    position: relative;
    top: -5rem;
    max-width: inherit;
  }
`;
