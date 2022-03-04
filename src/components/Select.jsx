import React from 'react';
import PropType from 'prop-types';

class Select extends React.Component {
  render() {
    const { data, text, onInputChange, value, name } = this.props;
    return (
      <label htmlFor={ text }>
        { text }
        <select
          data-testid={ data }
          name={ name }
          value={ value }
          onChange={ onInputChange }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  data: PropType.string.isRequired,
  text: PropType.string.isRequired,
  onInputChange: PropType.func.isRequired,
  value: PropType.bool.isRequired,
  name: PropType.string.isRequired,
};

export default Select;
