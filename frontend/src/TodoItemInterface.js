import React, {Component} from 'react';

import EditTodoItem from './EditItem/EditTodoItem';

import {ApiContext} from './etc/APIContext';

class TodoItemInterface extends Component {
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
    const headers = {'Content-Type': 'application/json'};
    const apiId = this.context.api + this.props.item.id + '/';

    await fetch(
        apiId,
        {headers, method: 'DELETE'}
    );
    this.props.handleUpdate();
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

  componentDidMount() {
    this.setState({completed: this.props.item.completed});
  }

  render() {
    const {id, title, description, completed} = this.props.item;
    return (
      <div className='todo-item'>
        {this.state.editing? <EditTodoItem/>: <span>HALLO</span>}
        <input
          type='checkbox'
          checked={completed}
          onChange={this.toggleCompleted}/>
        {title} - {description}
        <button onClick={()=>this.setState({editing: !this.state.editing})}>
            Edit
        </button>
        <button onClick={this.itemDelete}> Delete </button>
      </div>
    );
  }
}

TodoItemInterface.contextType = ApiContext;

export default TodoItemInterface;
