import React, {Component} from 'react';
import Card from './components/Card/Card';
import matrix from './libs/matrix';
import './App.scss';

export default class App extends Component {

  state = {
    cards: [
      {
        cardImage: 'assets/images/svg/icons8-angularjs-48.svg',
        imageAlt: 'Angular',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-react-40.svg',
        imageAlt: 'React.js',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-vue-js-48.svg',
        imageAlt: 'Vue.js',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-bootstrap-48.svg',
        imageAlt: 'Bootstrap',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-c-sharp-logo-48.svg',
        imageAlt: 'C#',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-c++-48.svg',
        imageAlt: 'C++',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-css3-48.svg',
        imageAlt: 'CSS3',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-html-5-48.svg',
        imageAlt: 'HTML5',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-java-48.svg',
        imageAlt: 'Java',
        active: false
      },
      {
        cardImage: 'assets/images/svg/javascript.svg',
        imageAlt: 'JavaScript',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-mongodb-48.svg',
        imageAlt: 'MongoDB',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-nodejs-48.svg',
        imageAlt: 'Node.js',
        active: false
      },
      {
        cardImage: 'assets/images/sensory-minds.png',
        imageAlt: 'Sensory-Minds',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-npm-48.svg',
        imageAlt: 'NPM',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-php-logo-40.svg',
        imageAlt: 'PHP',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-python-64.svg',
        imageAlt: 'Python',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-redux-48.svg',
        imageAlt: 'Redux',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-sass-96.svg',
        imageAlt: 'SASS',
        active: false
      },
      {
        cardImage: 'assets/images/svg/sql.svg',
        imageAlt: 'SQL',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-typescript-48.svg',
        imageAlt: 'TypeScript',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-webpack-64.svg',
        imageAlt: 'Webpack',
        active: false
      },
      {
        cardImage: 'assets/images/svg/api.svg',
        imageAlt: 'API',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-gulp-64.svg',
        imageAlt: 'Gulp',
        active: false
      },
      {
        cardImage: 'assets/images/svg/json-file.svg',
        imageAlt: 'JSON',
        active: false
      },
      {
        cardImage: 'assets/images/svg/icons8-swift.svg',
        imageAlt: 'SWIFT',
        active: false
      }
    ],
    checked: {},
    victory: false
  };

  cardClickHandler = (index) => {
    const newState = this.state;
    newState.cards[index].active = !newState.cards[index].active;
    newState.checked[index] = this.state.cards[index].active;

    this.setState({
      state: newState
    })

    let selectedCells = this.state.checked;

    const logicalSeries = [0, 1, 2, 3, 4];
    const bingoResult = undefined !== logicalSeries.find(row => logicalSeries.every(column => selectedCells[row * 5 + column])) ||
                        undefined !== logicalSeries.find(column => logicalSeries.every(row => selectedCells[row * 5 + column])) ||
                        logicalSeries.every(index => selectedCells[index * 5 + index]) ||
                        logicalSeries.every(index => selectedCells[index * 5 + 4 - index])
    
   
    newState.victory = bingoResult;
    this.setState({
      state: newState
    })

    if(this.state.victory) {
      document.querySelector('#c').style.display = 'block';
      matrix();
    }
  }

  renderCards() {
    return this.state.cards.map((card, index) => {
      return (
        <Card 
          key={index}
          image={card.cardImage}
          alt={card.imageAlt}
          active={card.active}
          victory={this.state.victory}
          cardClickHandler={() => this.cardClickHandler(index)}
        />
      );
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Bingo</h1>
        {this.renderCards()}
        <canvas id="c"></canvas>
      </div>
    );
  }
}
