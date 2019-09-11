import React, {Component} from 'react';
import {ApiContext} from './etc/APIContext';

import Description from './Description';
import EditItem from './EditItem';
import TodoItemInterface from './TodoItemInterface';


class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false,
      editing: false,
      open: false,
    };
  }

  renderItem(editing) {
    if (editing) {
      return <EditItem
        index={this.props.index}
        item={this.props.item}
        handleCancel={()=>this.setState({editing: false})}/>;
    }
    return <TodoItemInterface
      index={this.props.index}
      item={this.props.item}
      handleEdit={()=>this.setState({editing: true})}
      handleCollapse={() => this.setState({open: !this.state.open})}/>;
  }

  render() {
    return (
      <li className='todo-item'>
        {this.renderItem(this.state.editing)}
        {
          this.state.open &&
            <Description
              index={this.props.index}
              item={this.props.item}
            />
        }

      </li>
    );


    // this.state.editing?
    // <EditTodoItem
    //   index = {this.props.index}
    //   item = {this.props.item}
    //   handleCancel={()=>this.setState({editing: !this.state.editing})}
    //   handleUpdate={this.props.handleUpdate}
    // />:
    // <ItemInterface
    //   index = {this.props.index}
    //   item = {this.props.item}
    //   status = 'Edit'
    //   handleCancel={()=>this.setState({editing: !this.state.editing})}
    // />:
  }
}

TodoItem.contextType = ApiContext;

export default TodoItem;
