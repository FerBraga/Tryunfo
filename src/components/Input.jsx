import React from 'react';

class Input extends React.Component {
  render() {
    const { handleChange, type, name, value, data } = this.props;
    return (
      <label htmlFor={ name }>
        {/* { text }: */}
        <input
          type={ type }
          id={ name }
          name={ name }
          value={ value }
          onChange={ handleChange }
          data-testid={ data }

        />
      </label>
    );
  }
}

export default Input;
