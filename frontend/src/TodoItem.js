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
    this.itemDelete = this.itemDelete.bind(this);
  }

  async itemDelete() {
    // const headers = {'Content-Type': 'application/json'};
    // const apiId = this.context.api + this.props.item.id + '/';

    // await fetch(
    //     apiId,
    //     {headers, method: 'DELETE'}
    // );
    // this.props.handleUpdate();

    this.props.deteleTodo(this.props.item.id, this.props.index);
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
    // const {id, title, description, completed} = this.props.item;
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
            <TodoItemInterface
              index = {this.props.index}
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
