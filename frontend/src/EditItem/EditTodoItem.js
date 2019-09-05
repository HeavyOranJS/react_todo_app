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
    const editItemButton = (
      <button onClick={() => this.setState({editing: !this.state.editing})}>
          Edit
      </button>
    );
    return (
      <div>
        {this.state.editing?
                <EditItemInterface
                  handleCancel={() => this.setState(
                      {editing: !this.state.editing}
                  )}
                  handleUpdate={this.props.handleUpdate}/>:
                editItemButton}
      </div>
    );
  }
}

export default EditTodoItem;
