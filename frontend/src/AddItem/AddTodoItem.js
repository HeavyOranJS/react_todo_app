import React, {Component} from 'react';
import '../App.css';
import AddItemInterface from './AddItemInterface';

class AddTodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adding: false,
    };
  }

  render() {
    const addItemButton = (
      <button onClick={() => this.setState({adding: !this.state.adding})}>
            Add item
      </button>);
    return (
      <div>
        {this.state.adding?
                <AddItemInterface
                  handleCancel={
                    () => this.setState({adding: !this.state.adding})
                  }
                  handleUpdate={this.props.handleUpdate}/>:
                addItemButton}
        <button onClick={()=>console.log('TODO: clearall')}>Clear all</button>
      </div>
    );
  }
}

export default AddTodoItem;
