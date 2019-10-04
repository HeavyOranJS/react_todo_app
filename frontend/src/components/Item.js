import React, { Component } from 'react';

import { connect } from 'react-redux';

import todos from '../actions';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      editing: false,
    };

    this.toggleTodo = this.toggleTodo.bind(this);
  }

  toggleTodo() {
    const {
      id, title, description, completed,
    } = this.props.item;
    const toggledItem = {
      id,
      title,
      description,
      completed: !completed,
    };

    this.props.toggleTodo(toggledItem, this.props.index);
  }

  render() {
    const { title, completed } = this.props.item;
    return (
      <form id="todo-item-interface"
        className='row'>
        <input
          type='checkbox'
          id='todo-item-completion'
          checked={completed}
          onChange={this.toggleTodo}/>

        <p id='todo-item-title'
          className='main-element'
          onClick={this.props.handleEdit}>
          {title}
        </p>

        <button
          type='button'
          id='todo-item-expand'
          className='invisible'
          onClick={() => (
            this.props.handleCollapse())}>
          {this.props.open
            ? <i className="fa fa-chevron-up"/>
            : <i className="fa fa-chevron-down"/>}
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (item, index) => {
    dispatch(todos.editTodo(item, index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
