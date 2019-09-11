import React, {Component} from 'react';
import '../App.css';

import {connect} from 'react-redux';

import todos from '../actions';

import {ApiContext} from '../etc/APIContext';


class AddItemInterface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    this.props.addTodo(this.state.itemName, this.state.itemDescription);
    this.props.handleCancel();
  }

  render() {
    return <form className='todo-item-add-interface'>
      <input
        type='text'
        placeholder='Item name'
        onChange={(event) => this.setState({itemName: event.target.value})}/>

      <textarea
        placeholder='Item description'
        rows="4"
        cols="50"
        onChange={
          (event) => this.setState({itemDescription: event.target.value})}/>

      <input
        type='button'
        value='Add item'
        className='item-add'
        onClick={this.addItem}>
      </input>

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
    addTodo: (name, description) => {
      dispatch(todos.addTodo(name, description));
    },
  };
};

AddItemInterface.contextType = ApiContext;

export default connect(mapStateToProps, mapDispatchToProps)(AddItemInterface);
