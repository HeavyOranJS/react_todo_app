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
      open={this.state.open}
      handleEdit={()=>this.setState({editing: true})}
      handleCollapse={() => this.setState({open: !this.state.open})}/>;
  }

  render() {
    return (
      <li className='item'>
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
  }
}

TodoItem.contextType = ApiContext;

export default TodoItem;
