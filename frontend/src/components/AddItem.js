import React, { Component } from 'react';

import { connect } from 'react-redux';

import todos from '../actions';

class AddItem extends Component {
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
        className='item column'>
      <div className='row'>
        <input
          id='todo-item-add-title'
          className='text-input main-element'
          type='text'
          placeholder='Item name'
          onChange={(event) => this.setState({ itemName: event.target.value })}/>

        <button
          type='button'
          className='invisible'
          onClick={this.addItem}>
          <i className="fa fa-check action accept"/>
        </button>

        <button
          type='button'
          className='invisible'
          onClick={this.props.handleCancel}>
          <i className="fa fa-times action reject"/>
        </button>
      </div>

      <textarea
        id='todo-item-add-description'
        className='text-input'
        placeholder='Item description'
        rows="4"
        cols="50"
        onChange={
          (event) => this.setState({ itemDescription: event.target.value })}/>

    </form>;
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (name, description) => {
    dispatch(todos.addTodo(name, description));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
