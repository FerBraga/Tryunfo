import React from 'react';

class Select extends React.Component {
  render() {
    const { data, handleChange } = this.props;
    return (
      <select
        data-testid={ data }
        defaultValue="DEFAULT"
        name="rare"
        onChange={ handleChange }>
        <option id="normal">normal</option>
        <option id="raro">raro</option>
        <option id="muito">muito raro</option>
      </select>
    );
  }
}

export default Select;
