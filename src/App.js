import React, {Component} from 'react';
import Card from './components/Card/Card';
import matrix from './libs/matrix';
import './App.scss';

const winnerMatrix = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20]
];

export default class App extends Component {

  state = {
    cards: [
      {
        cardImage: 'assets/images/svg/icons8-angularjs-48.svg',
        imageAlt: 'Angular',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/icons8-react-40.svg',
        imageAlt: 'React.js',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/icons8-vue-js-48.svg',
        imageAlt: 'Vue.js',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/icons8-bootstrap-48.svg',
        imageAlt: 'Bootstrap',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/icons8-c-sharp-logo-48.svg',
        imageAlt: 'C#',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/icons8-c++-48.svg',
        imageAlt: 'C++',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/icons8-css3-48.svg',
        imageAlt: 'CSS3',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/icons8-html-5-48.svg',
        imageAlt: 'HTML5',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/icons8-java-48.svg',
        imageAlt: 'Java',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/javascript.svg',
        imageAlt: 'JavaScript',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/icons8-mongodb-48.svg',
        imageAlt: 'MongoDB',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/icons8-nodejs-48.svg',
        imageAlt: 'Node.js',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/sensory-minds.png',
        imageAlt: 'Sensory-Minds',
        active: false,
        winner: true
      },
      {
        cardImage: 'assets/images/svg/icons8-npm-48.svg',
        imageAlt: 'NPM',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/icons8-php-logo-40.svg',
        imageAlt: 'PHP',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/icons8-python-64.svg',
        imageAlt: 'Python',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/icons8-redux-48.svg',
        imageAlt: 'Redux',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/icons8-sass-96.svg',
        imageAlt: 'SASS',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/sql.svg',
        imageAlt: 'SQL',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/icons8-typescript-48.svg',
        imageAlt: 'TypeScript',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/icons8-webpack-64.svg',
        imageAlt: 'Webpack',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/api.svg',
        imageAlt: 'API',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/icons8-gulp-64.svg',
        imageAlt: 'Gulp',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/json-file.svg',
        imageAlt: 'JSON',
        active: false,
        winner: false
      },
      {
        cardImage: 'assets/images/svg/icons8-swift.svg',
        imageAlt: 'SWIFT',
        active: false,
        winner: false
      }
    ],
    checked: [],
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

    selectedCells[12] = true;

    const logicalSeries = [0, 1, 2, 3, 4];
    const bingoResult = undefined !== logicalSeries.find(row => logicalSeries.every(column => selectedCells[row * 5 + column])) ||
                        undefined !== logicalSeries.find(column => logicalSeries.every(row => selectedCells[row * 5 + column])) ||
                        logicalSeries.every(index => selectedCells[index * 5 + index]) ||
                        logicalSeries.every(index => selectedCells[index * 5 + 4 - index])
    
   
    newState.victory = bingoResult;
    this.setState({
      state: newState
    })

    this.winnerMatrixResult();

  }

  winnerMatrixResult() {
    const newState = this.state;
    const accArray = [];
    const checkedArray = [];

    newState.cards.map((card, index) => {
      return index === 12 ? card.winner = true : card.winner = false;
    });

    if(this.state.victory) {
      for (let key in this.state.checked) {
        if(this.state.checked[key]) {
          checkedArray.push(+key);
        }
      }

      for (let i = 0; i < winnerMatrix.length; i++) {
        let checker = (array, target) => target.every(value => array.includes(value));
        if (checker(checkedArray, winnerMatrix[i])) {
          for (let j = 0; j < checkedArray.length; j++) {
            
            if (typeof winnerMatrix[i][j] === 'number') {
              accArray.push(winnerMatrix[i][j]);
            }
          }
        }
      }
     
      for (let k = 0; k < accArray.length; k++) {
        newState.cards[accArray[k]].winner = true;
      }

      this.setState({
        state: newState
      })

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
          winner={card.winner}
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
