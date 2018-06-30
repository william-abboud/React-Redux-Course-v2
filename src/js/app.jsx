import React from 'react';
import { hot } from 'react-hot-loader';
import data from '../data/artists';
import ArtistList from './artist-list';

class App extends React.Component {
  log(alias, event) {
    console.log(alias);
  }

  render() {
    return <ArtistList artists={data} onClick={this.log} />;
  }
};

export default hot(module)(App);