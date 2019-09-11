import React, {Component} from 'react';
import {ApiContext} from './etc/APIContext';

import {connect} from 'react-redux';

import todos from './actions';

class TodoItemInterface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false,
      editing: false,
      open: false,
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

        <span
          className="todo-item-title"
          onClick={this.props.handleEdit}
        >{title}</span>

        <input
          type='button'
          value='Collapse'
          className='todo-item-expand'
          // TODO change from toggle?
          onClick={() => (
            // this.setState({open: !this.state.open})
            this.props.handleCollapse()
          )}
        />

        {/* {this.getExpandedItem(description)} */}

        {/* <input
            type='submit'
            value='Edit'
            className='todo-item-edit'
            onClick={this.props.handleEdit}/> */}

        {/* <input
            type='submit'
            value='Expand'
            className='todo-item-expand'
            onClick={}/> */}


        {/* <input
            type='submit'
            value='Delete'
            className='todo-item-delete'
            onClick={() =>
              this.props.deleteTodo(id, this.props.index)}/> */}
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
