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
      <button
        className='add-item-button'
        onClick={() => this.setState({adding: !this.state.adding})}>
          Add item
      </button>);
    // const addItemButton = (
    //   <button onClick={() => this.setState({adding: !this.state.adding})}>
    //         Add item
    //   </button>);
    return (
        this.state.adding?
                <AddItemInterface
                  handleCancel={
                    () => this.setState({adding: !this.state.adding})
                  }/>:
                addItemButton
    );
  }
}

export default AddTodoItem;
