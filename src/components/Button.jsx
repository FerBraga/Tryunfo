import React from 'react';
import PropType from 'prop-types';

class Button extends React.Component {
  render() {
    const { handleDelete } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-button"
        onClick={ handleDelete }
      >
        Excluir
      </button>
    );
  }
}

Button.propTypes = {
  handleDelete: PropType.func.isRequired,
};

export default Button;
