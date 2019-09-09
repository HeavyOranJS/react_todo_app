import React, {Component} from 'react';
import {ApiContext} from './etc/APIContext';

import {connect} from "react-redux";

import todos from './actions';

class TodoItemInterface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false,
      editing: false,
    };
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.itemDelete = this.itemDelete.bind(this);
  }

  async itemDelete() {
    // const headers = {'Content-Type': 'application/json'};
    // const apiId = this.context.api + this.props.item.id + '/';

    // await fetch(
    //     apiId,
    //     {headers, method: 'DELETE'}
    // );
    // this.props.handleUpdate();
    // this.props.itemDelete();
    this.props.deleteTodo(this.props.item.id, this.props.index);
  }

  async toggleCompleted() {
    const headers = {'Content-Type': 'application/json'};
    const {id, title, description, completed} = this.props.item;
    const body = JSON.stringify({
      'id': id,
      'title': title,
      'description': description,
      'completed': !completed,
    });

    await fetch(
        this.context.api + id + '/',
        {headers, method: 'PUT', body}
    );

    this.props.handleUpdate();
  }

  render() {
    const {id, title, description, completed} = this.props.item;
    return (
      <div className='todo-item'>
        <input
          type='checkbox'
          checked={completed}
          onChange={this.toggleCompleted}/>
        {title} - {description}
        <button onClick={this.props.handleEdit}>
            Edit
        </button>
        <button onClick={this.itemDelete}> Delete </button>
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
    deleteTodo: (id, index) => {
      dispatch(todos.deleteTodo(id, index));
    },
  };
};

TodoItemInterface.contextType = ApiContext;

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemInterface);
