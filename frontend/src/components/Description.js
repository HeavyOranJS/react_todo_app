import React from 'react';
import { connect } from 'react-redux';

import todos from '../actions';

function Description(props) {
  const { id, description, index } = props;
  return (
    <form id='todo-item-description' className="row">
      <p
        id="todo-item-description-text"
        className='main-element'
        onClick={() => (
          props.handleEdit())}>{description}</p>
      <button
        type='button'
        className='todo-item-description-delete invisible'
        onClick={() => (
          props.deleteTodo(id, index))}>
        <i className="fa fa-trash action danger"/>
      </button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id, index) => {
    dispatch(todos.deleteTodo(id, index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Description);
