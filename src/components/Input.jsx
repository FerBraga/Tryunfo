import React from 'react';
import PropType from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, data, name } = this.props;
    return (
      <label htmlFor={ name }>
        {/* { text }: */}
        <input
          type={ type }
          id={ name }
          // name={ name }
          // value={ value }
          // onChange={ handleChange }
          data-testid={ data }

        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropType.string.isRequired,
  name: PropType.string.isRequired,
  data: PropType.string.isRequired,

};

export default Input;
