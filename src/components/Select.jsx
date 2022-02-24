import React from 'react';
import PropType from 'prop-types';

class Select extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <select
        data-testid={ data }
        defaultValue="DEFAULT"
        name="rare"
        // onChange={ handleChange }
      >
        <option id="normal">normal</option>
        <option id="raro">raro</option>
        <option id="muito">muito raro</option>
      </select>
    );
  }
}

Select.propTypes = {
  data: PropType.string.isRequired,
};

export default Select;
