import React from 'react';
import { hot } from 'react-hot-loader';
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

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState((prevState) => {
    //     return {
    //       theme: 'light',
    //       page: prevState.page + 1
    //     }
    //   });
    // }, 2000);
  }
};

export default hot(module)(App);