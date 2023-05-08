import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName: 'Bradley', lastName: 'Jester'},
      company: 'Meta',
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at{' '}
            {this.state.company}!
          </p>
          <button
            onClick={() => {
              this.setState({name: {firstName: 'Rosa', lastName: 'Ramirez'}});
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
