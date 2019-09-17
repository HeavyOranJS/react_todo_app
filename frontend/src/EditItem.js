import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';
import todos from './actions';

import 'font-awesome/css/font-awesome.min.css';

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
    return <form className='todo-item-edit-interface'>
      <input
        type='text'
        className='text-input'
        value={this.state.title}
        placeholder='item name'
        onChange={(event) => this.setState({title: event.target.value})}/>

      <button
        type='button'
        className='invisible'
        onClick={() => (
          this.editItem(this.props.index, this.props.item))}>
        <i className="fa fa-check action accept"></i>
      </button>

      <button
        type='button'
        className='invisible'
        onClick={this.props.handleCancel}>
        <i className="fa fa-times action reject"></i>
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
