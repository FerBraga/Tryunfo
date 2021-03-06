import React from 'react';
import PropType from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, text, value, data, name,
      onInputChange, checked, hasTrunfo } = this.props;
    return (
      hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho'
        : (
          <label htmlFor={ name }>
            { text }
            :
            <input
              type={ type }
              name={ name }
              data-testid={ data }
              value={ value }
              checked={ checked }
              onChange={ onInputChange }
            />
          </label>)
    );
  }
}

Input.propTypes = {
  type: PropType.string.isRequired,
  value: PropType.string.isRequired,
  text: PropType.string.isRequired,
  data: PropType.string.isRequired,
  name: PropType.string.isRequired,
  onInputChange: PropType.func.isRequired,
  checked: PropType.bool.isRequired,
  hasTrunfo: PropType.bool.isRequired,

};

export default Input;
