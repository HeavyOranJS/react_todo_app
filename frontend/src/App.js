import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import { applyMiddleware, createStore } from 'redux';

import { Provider } from 'react-redux';
import React from 'react';
import thunk from 'redux-thunk';
import TodoList from './components/TodoList';
import todoApp from './reducers';

const store = createStore(todoApp, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <TodoList/>
    </Provider>
  );
}

export default App;
