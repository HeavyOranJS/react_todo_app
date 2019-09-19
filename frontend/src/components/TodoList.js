import React, {Component} from 'react';
import {connect} from 'react-redux';

import ItemContainer from './ItemContainer';
import AddItemContainer from './AddItemContainer';
import todos from '../actions';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const todoItems = this.props.todos.map(
        (item, index) => <ItemContainer
          key={item.id}
          index={index}
          item={item}
        />
    );
    return (
      <main id="main-wrapper">
        <ul id="todo-list">
          {todoItems}
        </ul>
        <AddItemContainer/>
      </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
