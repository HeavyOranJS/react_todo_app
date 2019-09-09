import React, {Component} from 'react';

import {connect} from 'react-redux';

import TodoItem from './TodoItem';
import AddTodoItem from './AddItem/AddTodoItem';
import {ApiContext} from './etc/APIContext';
import todos from './actions';
import './App.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  // TODO: create mechanism to toggle between edit and addition of new item
  // if addition starts when edit is happening end edit (change state)
  // and let addition to work

  handleUpdate() {
    console.log('fetching todolist (see fetched below)');
    const headers = {'Content-Type': 'application/json'};
    fetch(this.context.api, {headers})
        .then((res) => res.json())
        .then((actualTodos) => (
          this.setState({todos: actualTodos}))
        );
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const todoItems = this.props.todos.map(
        (item) => <TodoItem
          key={item.id}
          item={item}
          handleUpdate={this.handleUpdate}
        />
    );
    return (
      <div>
        {todoItems}
        <AddTodoItem/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => {
      dispatch(todos.fetchTodos());
    },
  };
};

TodoList.contextType = ApiContext;

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);