import React, {Component} from 'react';
import '../App.css';
import EditItemInterface from './EditItemInterface';


class EditTodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  render() {
    return (
      <li className='todo-item'>
        <EditItemInterface
          item={this.props.item}
          index={this.props.index}
          handleCancel={this.props.handleCancel}
          handleUpdate={this.props.handleUpdate}/>
      </li>
    );
  }
}

export default EditTodoItem;
