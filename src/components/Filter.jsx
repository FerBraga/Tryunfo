import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { onFilterChange, cardsFilter, cardName } = this.props;
    return (
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Nome da carta"
        onChange={ onFilterChange }
        name={ cardName }
        value={ cardsFilter }
      />
    );
  }
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  cardsFilter: PropTypes.arrayOf(String),
  cardName: PropTypes.string.isRequired,
};
Filter.defaultProps = {
  cardsFilter: [],
};

export default Filter;
