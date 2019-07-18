import React, { Component } from 'react';
import GamesList from '../components/gamesList';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SearchField from '../components/search-field';

// const IndexPage = () => (
//   <Layout>
//     <SEO title="GDDB" />
//     <SearchField placeholder="Search Game" handleChange={this.handleChange} />
//     <GamesList />
//   </Layout>
// );

class IndexPage extends Component {
  state = {
    searchField: '',
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { searchField } = this.state;

    return (
      <Layout>
        <SEO title="GDDB" />
        <SearchField placeholder="Search Game" handleChange={this.handleChange} />
        <GamesList search={searchField} />
      </Layout>
    );
  }
}

export default IndexPage;
