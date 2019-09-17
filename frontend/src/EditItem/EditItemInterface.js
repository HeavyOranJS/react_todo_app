import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../App.css';
import todos from '../actions';

import {ApiContext} from '../etc/APIContext';

class EditItemInterface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''};

    this.editItem = this.editItem.bind(this);
  }

  editItem(index) {
    const oldItem = this.props.item;
    const newItem = {
      'id': oldItem.id,
      'title': this.state.title,
      'description': this.state.description,
      'completed': oldItem.completed,
    };
    this.props.editTodo(newItem, index);

    this.props.handleCancel();
  }

  componentDidMount() {
    this.setState({
      title: this.props.item.title,
      description: this.props.item.description,
    });
  }

  render() {
    return <form className='item-edit-interface'>
      <input
        type='text'
        value={this.state.title}
        placeholder='item name'
        onChange={(event) => this.setState({title: event.target.value})}/>

      <textarea
        value={this.state.description}
        placeholder='item description'
        rows="4"
        cols="50"
        onChange={
          (event) => this.setState({description: event.target.value})}/>

      <input
        type='submit'
        value='Submit'
        onClick={() => this.editItem(this.props.index)}/>

      <input
        type='submit'
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

EditItemInterface.contextType = ApiContext;

export default connect(mapStateToProps, mapDispatchToProps)(EditItemInterface);
