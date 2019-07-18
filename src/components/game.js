import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const Game = ({
  name, img, slug, id,
}) => (
  // same as props and then using props.games.name

  <Link to={`/details/${slug}`}>
    <Overdrive id={id}>
      <Cover src={img} alt={`${name} cover`} />
    </Overdrive>
  </Link>
);

export default Game;

Game.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.number,
}.isRequired;

export const Cover = styled.img`
  height: auto;
  width: auto;
  box-shadow: 0 0 35px #000;
`;
