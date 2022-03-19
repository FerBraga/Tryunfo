import React from 'react';
import PropTypes from 'prop-types';

class SuperTrunfo extends React.Component {
  render() {
    const { onInputChangeTrunfo } = this.props;
    return (
      <label htmlFor="checkboxTrunfo">
        <input
          type="checkbox"
          name="checkboxTrunfo"
          data-testid="trunfo-filter"
          // value={ checked }
          onChange={ onInputChangeTrunfo }
        />
        Super Trunfo
      </label>
    );
  }
}

SuperTrunfo.propTypes = {
  // checked: PropTypes.bool.isRequired,
  onInputChangeTrunfo: PropTypes.func.isRequired,
};

export default SuperTrunfo;
