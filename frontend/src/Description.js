import React, {Component} from 'react';
import {ApiContext} from './etc/APIContext';

import {connect} from 'react-redux';

import EditDescription from './EditDescription';

import todos from './actions';

class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false,
      editing: false,
    };
  }

  render() {
    const {id, description} = this.props.item;
    return (
      <form
        className="todo-item-description">
        {
          this.state.editing?
          <EditDescription
            index={this.props.index}
            item={this.props.item}
            handleCancel={() => (this.setState({editing: !this.state.editing}))}/>:
          <span onClick={() => (
            this.setState({editing: true}))}>{description}</span>
        }
        <input
          type='button'
          value='Delete'
          className='todo-item-delete'
          onClick={() =>
            this.props.deleteTodo(id, this.props.index)}/>
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
    deleteTodo: (id, index) => {
      dispatch(todos.deleteTodo(id, index));
    },
  };
};

Description.contextType = ApiContext;

export default connect(mapStateToProps, mapDispatchToProps)(Description);
