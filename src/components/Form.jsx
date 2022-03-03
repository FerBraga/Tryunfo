import React from 'react';
import PropType from 'prop-types';
import Input from './Input';
import Select from './Select';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <div>
        <Input
          data="name-input"
          type="text"
          text="Nome"
          name="cardName"
          value={ cardName }
          onInputChange={ onInputChange }
        />
        <br />
        <Input
          data="description-input"
          type="textarea"
          name="cardDescription"
          text="Descrição"
          value={ cardDescription }
          onInputChange={ onInputChange }
        />
        <br />
        <Input
          data="attr1-input"
          type="number"
          name="cardAttr1"
          text="Primeiro atributo"
          value={ cardAttr1 }
          onInputChange={ onInputChange }
        />
        <br />
        <Input
          data="attr2-input"
          type="number"
          name="cardAttr2"
          text="Segundo atributo"
          value={ cardAttr2 }
          onInputChange={ onInputChange }
        />
        <br />
        <Input
          data="attr3-input"
          type="number"
          name="cardAttr3"
          text="Terceiro atributo"
          value={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <br />
        <Input
          data="image-input"
          type="text"
          name="cardImage"
          text="URL da imagem"
          value={ cardImage }
          onInputChange={ onInputChange }
        />
        <br />
        <Select
          data="rare-input"
          text="Raridade da carta"
          name="cardRare"
          value={ cardRare }
          onInputChange={ onInputChange }
        />
        <br />
        <Input
          data="trunfo-input"
          type="checkbox"
          name="cardTrunfo"
          text="Super Trunfo?"
          checked={ cardTrunfo }
          onInputChange={ onInputChange }
        />
        <br />
        <button
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
          type="button"
          name="save-button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.number.isRequired,
  cardAttr2: PropType.number.isRequired,
  cardAttr3: PropType.number.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  // hasTrunfo: PropType.string.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
};

export default Form;
