import React, {Component} from 'react';
import '../App.css';

import {connect} from 'react-redux';

import todos from '../actions';

import 'font-awesome/css/font-awesome.min.css';


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
    return <form id='todo-item-add-interface'
      className='item'>
      <input
        id='todo-item-add-title'
        className='text-input'
        type='text'
        placeholder='Item name'
        onChange={(event) => this.setState({itemName: event.target.value})}/>

      <textarea
        id='todo-item-add-description'
        className='text-input'
        placeholder='Item description'
        rows="4"
        cols="50"
        onChange={
          (event) => this.setState({itemDescription: event.target.value})}/>

      <button
        type='button'
        className='invisible'
        onClick={this.addItem}>
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
    addTodo: (name, description) => {
      dispatch(todos.addTodo(name, description));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemInterface);
