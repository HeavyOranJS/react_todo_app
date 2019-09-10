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

    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  async toggleCompleted() {
    const headers = {'Content-Type': 'application/json'};
    const {id, title, description, completed} = this.props.item;
    const body = JSON.stringify({
      'id': id,
      'title': title,
      'description': description,
      'completed': !completed,
    });

    const res = await fetch(
        this.context.api + id + '/',
        {headers, method: 'PUT', body}
    );

    console.log(res);
    this.props.handleUpdate();
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
