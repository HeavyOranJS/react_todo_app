import React, {Component} from 'react';
import {connect} from 'react-redux';

import todos from '../actions';

class EditItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.item.title,
    };

    this.editItem = this.editItem.bind(this);
  }

  editItem(index, oldItem) {
    const {id, description, completed} = oldItem;
    const newItem = {
      'id': id,
      'title': this.state.title,
      'description': description,
      'completed': completed,
    };
    this.props.editTodo(newItem, index);
    this.props.handleCancel();
  }

  render() {
    return <form className='row'>
      <input
        id='todo-item-edit-interface-title'
        type='text'
        className='text-input main-element'
        value={this.state.title}
        placeholder='item name'
        onChange={(event) => this.setState({title: event.target.value})}/>

      <button
        id='todo-item-edit-interface-accept'
        type='button'
        className='invisible'
        onClick={() => (
          this.editItem(this.props.index, this.props.item))}>
        <i className="fa fa-check action accept"/>
      </button>

      <button
        id='todo-item-edit-interface-cancel'
        type='button'
        className='invisible'
        onClick={this.props.handleCancel}>
        <i className="fa fa-times action reject"/>
      </button>
    </form>;
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

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
