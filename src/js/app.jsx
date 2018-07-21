import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { createStore } from 'redux';
import ChuckNorrisJokes from './chuck-norris-jokes';

/*
import StarWarsCharactersList from './star-wars-characters-list';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'dark',
      page: 1      
    };
  }

  render() {
    const { theme, page } = this.state;

    return <StarWarsCharactersList theme={theme} page={page} />;
  }
};
*/

/*
class Row extends Component {
  componentWillUnmount() {
    alert('You have delete' + this.props.name);
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.age}</td>
        <td><button onClick={this.props.onRemove}>Delete</button></td>
      </tr>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jokes: [],
      lang: 'bg',
      rowsData: [
        {
          name: 'pesho',
          age: 22
        },
        {
          name: 'gosho',
          age: 25
        },
        {
          name: 'ivo',
          age: 52
        }
      ]
    };

    this.setLanguage = this.setLanguage.bind(this);
    this.removeRow = this.removeRow.bind(this);
  }

  removeRow(name) {
    this.setState(prevState => {
      return {
        rowsData: prevState.rowsData.filter(piece => piece.name !== name)
      };
    });
  }

  setLanguage() {
    if (this.state.lang === 'bg') {
      this.setState({ lang: 'en' });
      return;
    }

    if (this.state.lang === 'en') {
      this.setState({ lang: 'es' });
      return;
    }

    this.setState({ lang: 'bg' });
  }

  render() {
    //<ChuckNorrisJokes jokes={this.state.jokes} lang={this.state.lang} />
    // <button onClick={this.setLanguage}>Change language</button>
    //  <h2>Current language: {this.state.lang}</h2>
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.rowsData.map(piece => 
                <Row key={piece.name} name={piece.name} age={piece.age} onRemove={() => this.removeRow(piece.name)} />)
            }
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        jokes: [{"id":1,"joke":"Chuck Norris uses ribbed condoms inside out, so he gets the pleasure.","categories":["explicit"]},{"id":2,"joke":"MacGyver can build an airplane out of gum and paper clips. Chuck Norris can kill him and take it.","categories":[]},{"id":3,"joke":"Chuck Norris doesn't read books. He stares them down until he gets the information he wants.","categories":[]},{"id":4,"joke":"If you ask Chuck Norris what time it is, he always answers &quot;Two seconds till&quot;. After you ask &quot;Two seconds to what?&quot;, he roundhouse kicks you in the face.","categories":[]},{"id":5,"joke":"Chuck Norris lost his virginity before his dad did.","categories":["explicit"]},{"id":6,"joke":"Since 1940, the year Chuck Norris was born, roundhouse kick related deaths have increased 13,000 percent.","categories":[]},{"id":12,"joke":"Chuck Norris sheds his skin twice a year.","categories":[]},{"id":13,"joke":"Chuck Norris once challenged Lance Armstrong in a &quot;Who has more testicles?&quot; contest. Chuck Norris won by 5.","categories":["explicit"]},{"id":14,"joke":"There are no steroids in baseball. Just players Chuck Norris has breathed on.","categories":[]},{"id":15,"joke":"When Chuck Norris goes to donate blood, he declines the syringe, and instead requests a hand gun and a bucket.","categories":[]}]
      })
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log(this.props, this.state);
  }
};
*/

function appReducer(currentState, action) {
  if (action.type === 'CREATE_GREETING_MESSAGE') {
    return Object.assign(currentState, {
      greetingMessages: [...currentState.greetingMessages, { message: action.message, language: action.language }]
    });
  }

  return {
    greetingMessages: [
    ],
    shoppingCardItems: [
      1,
      2,
      3
    ]
  };
}

const store = createStore(appReducer);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };

    this.addMessage = this.addMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      message: target.value
    });
  }

  addMessage(e) {
    e.preventDefault();

    const action = {
      type: 'CREATE_GREETING_MESSAGE',
      language: 'en',
      message: this.state.message,
    };
    
    store.subscribe(() => {
      this.forceUpdate();
    });
    store.dispatch(action);
  }

  render() {
    return (
      <div>
        <ul>
          {
            store.getState().greetingMessages.map(greeting => <li>{greeting.message}</li>)
          }
        </ul>
        <form onSubmit={this.addMessage}>
          <input type="text" onChange={this.handleChange} value={this.state.message} />
          <button>Add Message</button>
        </form>
      </div>
    );
  }
}

export default hot(module)(App);