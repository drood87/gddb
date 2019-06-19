import React from 'react';
import GamesList from '../components/gamesList';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="GDDB" />
    <GamesList />
  </Layout>
);
export default IndexPage;
