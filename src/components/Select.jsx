import React from 'react';
import PropType from 'prop-types';

class Select extends React.Component {
  render() {
    const { data, text, onInputChange, value } = this.props;
    return (
      <label htmlFor={ text }>
        { text }
        <select
          data-testid={ data }
          defaultValue="DEFAULT"
          name={ text }
          onChange={ onInputChange }
          value={ value }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito">muito raro</option>
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
};

export default Select;
