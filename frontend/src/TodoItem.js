import React, {Component} from 'react';
import {ApiContext} from './etc/APIContext';

import EditTodoItem from './EditItem/EditTodoItem';
import TodoItemInterface from './TodoItemInterface';


class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false,
      editing: false,
    };
  }

  render() {
    return (
      <div className='todo-item'>
        {
            this.state.editing?
            <EditTodoItem
              index = {this.props.index}
              item = {this.props.item}
              handleCancel={()=>this.setState({editing: !this.state.editing})}
              handleUpdate={this.props.handleUpdate}
            />:
            // <ItemInterface
            //   index = {this.props.index}
            //   item = {this.props.item}
            //   status = 'Edit'
            //   handleCancel={()=>this.setState({editing: !this.state.editing})}
            // />:
            <TodoItemInterface
              index={this.props.index}
              item={this.props.item}
              handleEdit={()=>this.setState({editing: !this.state.editing})}
              handleUpdate={this.props.handleUpdate}/>
        }
      </div>
    );
  }
}

TodoItem.contextType = ApiContext;

export default TodoItem;
