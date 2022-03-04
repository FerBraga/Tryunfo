import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      name: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    // this.validation = this.validation.bind(this);
    // this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value; // pegar o valor do checkBox
    this.setState({
      [name]: value,
    }, this.validation);
  };

validation = () => {
  const {
    cardName,
    cardImage,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardRare,
    cardDescription,
  } = this.state;

  const name = cardName.length !== 0;
  const image = cardImage.length !== 0;
  const description = cardDescription.length !== 0;
  const rare = cardRare.length !== 0;
  const valueMaxAttr = 90;
  const totalAttr = 210;
  const attr1 = Number(cardAttr1) >= 0 && Number(cardAttr1) <= valueMaxAttr;
  const attr2 = Number(cardAttr2) >= 0 && Number(cardAttr2) <= valueMaxAttr;
  const attr3 = Number(cardAttr3) >= 0 && Number(cardAttr3) <= valueMaxAttr;
  const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= totalAttr;

  if (name && description && image && rare && attr1
    && attr2 && attr3 && sum) {
    this.setState({ isSaveButtonDisabled: false });
  } else {
    this.setState({ isSaveButtonDisabled: true });
  }
}
// onSaveButtonClick({ target }) {
//   target.name;
// }

render() {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
    // hasTrunfo,
    isSaveButtonDisabled,
    name,
  } = this.state;

  return (
    <div>
      <h1>Tryunfo</h1>
      <Form
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        cardImage={ cardImage }
        cardRare={ cardRare }
        cardTrunfo={ cardTrunfo }
        // hasTrunfo={ hasTrunfo }
        isSaveButtonDisabled={ isSaveButtonDisabled }
        onInputChange={ this.onInputChange }
        onSaveButtonClick={ this.onSaveButtonClick }
        name={ name }
      />
      <Card
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        cardImage={ cardImage }
        cardRare={ cardRare }
        cardTrunfo={ cardTrunfo }
      />
    </div>
  );
}
}

export default App;
