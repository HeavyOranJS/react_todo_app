import React, {Component} from 'react';

import {connect} from 'react-redux';

import todos from '../actions';

class EditDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: this.props.item.description,
    };
  }

  editItem(index, oldItem) {
    const {id, title, completed} = oldItem;
    const newItem = {
      id: id,
      title: title,
      description: this.state.description,
      completed: completed,
    };
    this.props.editTodo(newItem, index);
    this.props.handleCancel();
  }

  render() {
    return (
      <form className="todo-item-interface-edit-descriprion">
        <textarea
          className="text-input description-edit"
          value={this.state.description}
          placeholder="item description"
          rows="4"
          cols="50"
          onChange={(event) => this.setState({description: event.target.value})}
        />

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
    editTodo: (index, item) => {
      dispatch(todos.editTodo(index, item));
    },
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditDescription);