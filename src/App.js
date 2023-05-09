import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '7z3y4ma653rpnam2',
        },
        {
          name: 'Frank',
          id: 'wlu48sfph6z86n8i',
        },
        {
          name: 'Jacky',
          id: 'cy3g0562av66cv5r',
        },
        {
          name: 'Andrei',
          id: '5t4oj115k10jf799',
        },
      ],
    };
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
