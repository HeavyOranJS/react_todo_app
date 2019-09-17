import React, {Component} from 'react';
import {ApiContext} from './etc/APIContext';

import {connect} from 'react-redux';

import 'font-awesome/css/font-awesome.min.css';

import todos from './actions';

class TodoItemInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      editing: false,
    };

    this.toggleTodo = this.toggleTodo.bind(this);
    this.itemDelete = this.itemDelete.bind(this);
  }

  itemDelete() {
    this.props.deleteTodo(this.props.item.id, this.props.index);
  }

  toggleTodo() {
    const {id, title, description, completed} = this.props.item;
    const toggledItem = {
      id: id,
      title: title,
      description: description,
      completed: !completed,
    };

    this.props.toggleTodo(toggledItem, this.props.index);
  }

  render() {
    const {title, completed} = this.props.item;
    return (
      <form className="todo-item-interface">
        <input
          type='checkbox'
          className='todo-item-completion'
          checked={completed}
          onChange={this.toggleTodo}/>

        <p
          className="todo-item-title"
          onClick={this.props.handleEdit}
        >
          {title}
        </p>

        <button
          type='button'
          className='todo-item-expand invisible'
          onClick={() => (
            this.props.handleCollapse())}>
          {this.props.open?
            <i className="fa fa-chevron-up"></i>:
            <i className="fa fa-chevron-down"></i>}
        </button>
      </form>
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
    deleteTodo: (id, index) => {
      dispatch(todos.deleteTodo(id, index));
    },
    toggleTodo: (item, index) => {
      dispatch(todos.editTodo(item, index));
    },
  };
};

TodoItemInterface.contextType = ApiContext;

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemInterface);
