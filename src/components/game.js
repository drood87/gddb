import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, 1fr); */
`;

// const GamesHeader = styled.h3`
//   text-align: center;
//   font-size: 0.9rem;
//   margin-bottom: 20px;
// `;

const GameImage = styled.img`
  width: auto;
  height: auto;
`;

const Game = ({ name, img, slug }) => (
  // same as props and then using props.games.name
  <Wrapper>
    <Link to={`/details/${slug}`}>
      <GameImage src={img} alt={`${name} cover`} />
    </Link>
  </Wrapper>
);

export default Game;

Game.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
}.isRequired;
