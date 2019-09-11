import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';
import todos from './actions';

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
        value={this.state.title}
        placeholder='item name'
        onChange={(event) => this.setState({title: event.target.value})}/>

      <input
        type='button'
        value='Edit'
        onClick={() => this.editItem(this.props.index, this.props.item)}/>

      <input
        type='button'
        value='Cancel'
        onClick={this.props.handleCancel}/>
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
