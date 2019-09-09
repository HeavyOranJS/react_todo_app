import React, {Component} from 'react';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import todoApp from './reducers';

import TodoList from './TodoList.js';
import './App.css';

const store = createStore(todoApp, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList/>
      </Provider>
    );
  }
}

export default App;
