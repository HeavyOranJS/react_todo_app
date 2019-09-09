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
      description: '',
    };

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
    return <div>
      <input
        name='todoItemName'
        value={this.state.title}
        placeholder='item name'
        type='text'
        onChange={(event) => this.setState({title: event.target.value})}>
      </input>
      <textarea
        name='todoItemDescription'
        value={this.state.description}
        placeholder='item description'
        rows="4"
        cols="50"
        onChange={
          (event) => this.setState({description: event.target.value})
        }>
      </textarea>
      <button onClick={() => this.editItem(this.props.index)}>Submit</button>
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
    editTodo: (index, item) => {
      dispatch(todos.editTodo(index, item));
    },
  };
};

EditItemInterface.contextType = ApiContext;

export default connect(mapStateToProps, mapDispatchToProps)(EditItemInterface);
