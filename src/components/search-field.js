import React from 'react';
import PropTypes from 'prop-types';

const SearchField = ({ placeholder, handleChange }) => (
  <div>
    <input type="search" placeholder={placeholder} onChange={handleChange} />
  </div>
);

SearchField.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default SearchField;
