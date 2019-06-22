import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from './layout';

export default class GameDetail extends Component {
  componentDidMount() {}

  render() {
    const { allInternalData } = this.props;
    return (
      <Layout>
        <h1>{allInternalData.edges[0].node.published.slug}</h1>
      </Layout>
    );
  }
}

export const query = graphql`
  query GameQuery($slug: String!, $id: Int!, $name: String!) {
    allInternalData(filter: { id: { ne: "dummy" } }) {
      edges {
        node {
          published {
            slug
            alternative_id
            name
          }
        }
      }
    }
  }
`;

GameDetail.propTypes = {
  allInternalData: PropTypes.shape({
    edges: PropTypes.shape({
      node: PropTypes.shape({
        published: PropTypes.shape({
          slug: PropTypes.string,
          id: PropTypes.number,
          name: PropTypes.string,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
