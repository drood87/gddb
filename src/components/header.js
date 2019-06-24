import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
// @ts-ignore
import styled from 'styled-components';
// @ts-ignore
import logo from '../images/logo.svg';

const HeaderWrapper = styled.header`
  background: #111;
  margin-bottom: 1.45rem;

  & > div {
    margin: 0 auto;
    max-width: 960;
    padding: 1.45rem 1.0875rem;

    & > h1 {
      margin: 0;
    }
  }
`;

const StyledLink = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div>
      <h1>
        <StyledLink to="/">
          <img src={logo} alt="GDDB Logo" />
          {siteTitle}
        </StyledLink>
      </h1>
    </div>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
