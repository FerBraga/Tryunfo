import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Button from './components/Button';
import Filter from './components/Filter';

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
      // cardsFiltered,
      cardsFilter,
    } = this.state;

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
        </section>

        <div>
          { cards
            .filter((cardd) => cardd.cardName.includes(cardsFilter))
            .map((cardss) => (
              <div id={ cardss.cardName } key={ cardss.cardName }>
                <Card
                  // cardss={ cardss }
                  key={ cardss.cardName }
                  cardName={ cardss.cardName }
                  cardDescription={ cardss.cardDescription }
                  cardAttr1={ cardss.cardAttr1 }
                  cardAttr2={ cardss.cardAttr2 }
                  cardImage={ cardss.cardImage }
                  cardRare={ cardss.cardRare }
                  cardTrunfo={ cardss.cardTrunfo }
                />
                <Button handleDelete={ this.handleDelete } />
              </div>))}
          ;
        </div>
      </div>
    );
  }
}

export default App;
