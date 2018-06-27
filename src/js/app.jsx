import React from 'react';
import { hot } from 'react-hot-loader';
import data from '../data/artists';
import ArtistList from './artist-list';

const App = () => {
  return <ArtistList artists={data} />;
};

export default hot(module)(App);