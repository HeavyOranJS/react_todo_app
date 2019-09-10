import React, {Component} from 'react';
import '../App.css';

import Button from '@material-ui/core/Button';
// import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';

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
    return <div>
      <input
        name='todoItemName'
        placeholder='item name'
        type='text'
        onChange={(event) => this.setState({itemName: event.target.value})}>
      </input>
      <textarea
        name='todoItemDescription'
        placeholder='item description'
        rows="4"
        cols="50"
        onChange={
          (event) => this.setState({itemDescription: event.target.value})
        }>
      </textarea>
      
      <Button variant='text' color='primary' onClick={this.addItem}>
        <AddIcon color="action"/>Add
      </Button>
      <button onClick={this.props.handleCancel}>Cancel</button>
    </div>;
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
