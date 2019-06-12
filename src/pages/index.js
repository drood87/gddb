import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`;

const ToggleButton = styled.button`
  outline: none;
  border-radius: 20px;
  padding: 1rem 3rem;
  border: 1px solid #543654;
  background-color: #543654;
  color: #fff;
  margin-bottom: 1rem;
  font-size: inherit;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 6px 6px 38px 1px rgba(56, 61, 59, 1);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 6px 7px 14px 1px rgba(56, 61, 59, 1);
  }
`;

// const IndexPage = () => (

//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <ImageWrapper>
//       <Image />
//     </ImageWrapper>
//     <Link to="/page-2/">Go to page 2</Link>
//     <p>This toggles on and off</p>
//     <ToggleButton>Show/Hide</ToggleButton>
//   </Layout>
// )

class IndexPage extends Component {
  state = {
    toggle: true,
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <Welcome text="Welcome to GDDB" toggle={this.state.toggle} />
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <ImageWrapper>
          <Image />
        </ImageWrapper>
        <Link to="/page-2/">Go to page 2</Link>
        {this.state.toggle && <p>This toggles on and off</p>}
        <ToggleButton onClick={this.toggle}>Show/Hide</ToggleButton>
      </Layout>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text, toggle } = this.props;
    console.log(toggle);
    return (
      <div>
        <h1>{text}</h1>
        <p>Glad you're here</p>
      </div>
    );
  }
}

// const Welcome = ({ toggle }) => (
//   <div>
//     <h1>WELCOME TO GDDB</h1>
//     <p>Glad you're here</p>
//   </div>
// )

export default IndexPage;
