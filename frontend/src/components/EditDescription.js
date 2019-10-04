import React, { Component } from 'react';

import { connect } from 'react-redux';

import todos from '../actions';

class EditDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: this.props.item.description,
    };
  }

  editItem(index, oldItem) {
    const { id, title, completed } = oldItem;
    const newItem = {
      id,
      title,
      description: this.state.description,
      completed,
    };
    this.props.editTodo(newItem, index);
    this.props.handleCancel();
  }

  render() {
    return (
      <form className="row">
        <textarea
          className="text-input description-edit"
          value={this.state.description}
          placeholder="item description"
          rows="4"
          cols="50"
          onChange={(event) => this.setState({ description: event.target.value })}
        />

        <div id='todo-item-description-wrapper' className='column'>
          <button
            type="button"
            className="todo-item-description-done invisible"
            onClick={() => this.editItem(this.props.index, this.props.item)}>
            <i className="fa fa-check action accept"/>
          </button>

          <button
            type="button"
            className="todo-item-description-cancel invisible"
            onClick={() => this.props.handleCancel()}>
            <i className="fa fa-times action reject"/>
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  editTodo: (index, item) => {
    dispatch(todos.editTodo(index, item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDescription);
