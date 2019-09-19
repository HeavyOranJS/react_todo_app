import React, {Component} from 'react';
import {connect} from 'react-redux';

import EditDescription from './EditDescription';

import todos from '../actions';

class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  renderDescription(id, description, editing) {
    if (editing) {
      return <EditDescription
        index={this.props.index}
        item={this.props.item}
        handleCancel={() => (this.setState({editing: !this.state.editing}))}/>;
    }
    return (
      <form id='todo-item-description' className="row">
        <p
          id="todo-item-description-text"
          className='main-element'
          onClick={() => (
            this.setState({editing: true}))}>{description}</p>
        <button
          type='button'
          className='todo-item-description-delete invisible'
          onClick={() => (
            this.props.deleteTodo(id, this.props.index))}>
          <i className="fa fa-trash action danger"/>
        </button>
      </form>

    );
  }

  render() {
    const {id, description} = this.props.item;
    return (
      this.renderDescription(id, description, this.state.editing)
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

export default connect(mapStateToProps, mapDispatchToProps)(Description);
