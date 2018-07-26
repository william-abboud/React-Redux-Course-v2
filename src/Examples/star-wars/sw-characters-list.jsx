import React, { Component } from 'react';
import StarWarsCharactersList from './star-wars-characters-list';

export default class App extends React.Component {
  constructor(props) {
    props(props);
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