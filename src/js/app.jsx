import React from 'react';
import { hot } from 'react-hot-loader';
import data from '../data/artists';
import ArtistList from './artist-list';
import RecordsTable from '../Homework-solutions/homework-2/records-table';
import records from '../Homework-solutions/homework-2/records';


class App extends React.Component {
  log(alias, event) {
    console.log(alias);
  }

  render() {
    return <RecordsTable records={records} />;
    // return <ArtistList artists={data} onClick={this.log} />;
  }
};

export default hot(module)(App);