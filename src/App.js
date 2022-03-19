import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Button from './components/Button';
import Filter from './components/Filter';
import SuperTrunfo from './components/SuperTrunfo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      // cardsFiltered: [],
      cardsFilter: '',
      checked: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value; // pegar o valor do checkBox
    this.setState({
      [name]: value,
    }, this.validation);
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const cartao = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      cards: [...prevState.cards, cartao],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }), this.validationHasTrunfo);
  }

  onInputChangeTrunfo = ({ target }) => {
    const check = target.checked;
    if (check) {
      this.setState({
        checked: true,
      });
    } else {
      this.setState({
        checked: false,
      });
    }
  }

  onFilterChange = ({ target }) => {
    const valueTarget = target.value;

    this.setState({
      cardsFilter: valueTarget,
    });
  };

  handleDelete = (event) => {
    const { cards } = this.state;
    const cardInBookClicked = event.target.parentNode;
    const findElementForDelete = cards
      .filter((card) => (
        card.cardName !== cardInBookClicked.id
      ));
    this.setState({
      cards: findElementForDelete,
    }, this.validationHasTrunfo);
    console.log(findElementForDelete);
  };

  validationHasTrunfo = () => {
    const { cards } = this.state;
    const cardTrue = cards.some((card) => card.cardTrunfo === true);
    if (cardTrue) {
      this.setState({
        hasTrunfo: true,
      });
    } else {
      this.setState({
        hasTrunfo: false,
      });
    }
  };

  validation = () => { // finalizado com colaboração da colega Lígia
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
      hasTrunfo,
      isSaveButtonDisabled,
      cards,
      cardsFilter,
      checked,
    } = this.state;

    const trunfoList = cards.filter((card) => card.cardTrunfo === true)
      .map((carta) => (
        <div id={ carta.cardName } key={ carta.cardName }>
          <Card
            key={ carta.cardName }
            cardName={ carta.cardName }
            cardDescription={ carta.cardDescription }
            cardAttr1={ carta.cardAttr1 }
            cardAttr2={ carta.cardAttr2 }
            cardAttr3={ carta.cardAttr3 }
            cardImage={ carta.cardImage }
            cardRare={ carta.cardRare }
            cardTrunfo={ carta.cardTrunfo }
          />
          <Button handleDelete={ this.handleDelete } />
        </div>));

    const totalList = cards
      .filter((item) => item.cardName.includes(cardsFilter))
      .map((item) => (
        <div id={ item.nome } key={ item.nome }>
          <Card
            carta={ item }
            key={ item.cardName }
            cardName={ item.cardName }
            cardDescription={ item.cardDescription }
            cardAttr1={ item.cardAttr1 }
            cardAttr2={ item.cardAttr2 }
            cardAttr3={ item.cardAttr3 }
            cardImage={ item.cardImage }
            cardRare={ item.cardRare }
            cardTrunfo={ item.cardTrunfo }
          />
          <Button handleDelete={ this.handleDelete } />
        </div>));

    console.log(cardsFilter);
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
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
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
        <section>
          <Filter
            cardName={ cardName }
            cardsFilter={ cardsFilter }
            onFilterChange={ this.onFilterChange }
          />
          <SuperTrunfo
            onInputChangeTrunfo={ this.onInputChangeTrunfo }
            checked={ checked }
          />
        </section>
        <div>
          { (checked) ? trunfoList : totalList }
        </div>
      </div>
    );
  }
}
export default App;
