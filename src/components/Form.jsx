import React from 'react';
import Input from './Input';
import Select from './Select';

class Form extends React.Component {
  render() {
    return (
      <div>
        <Input
          data="name-input"
          // handleChange={ this.handleChange }
          type="text"
        />
        <Input
          data="description-input"
          // handleChange={ this.handleChange }
          type="textarea"
        />
        <Input
          data="attr1-input"
          // handleChange={ this.handleChange }
          type="number"
        />
        <Input
          data="attr2-input"
          // handleChange={ this.handleChange }
          type="number"
        />
        <Input
          data="attr3-input"
          // handleChange={ this.handleChange }
          type="number"
        />
        <Input
          data="image-input"
          // handleChange={ this.handleChange }
          type="text"
        />
        <Select
          data="rare-input"
          // handleChange={ this.handleChange }
        />
        <Input
          data="trunfo-input"
          // handleChange={ this.handleChange }
          type="checkbox"
        />
        <button type="button" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;
