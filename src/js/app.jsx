import React from 'react';
import Content from './content';
import { hot } from 'react-hot-loader';

function App() {
  return (
    <Content
      title="Hello World"
      theme="dark"
      isLoggedIn
    >
      <p>Hello World I am from the outside</p>
      <p>Hello World I am from the outside 2</p>
    </Content>
  );
};

export default hot(module)(App);