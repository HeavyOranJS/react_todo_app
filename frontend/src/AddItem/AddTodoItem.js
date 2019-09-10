import React, {Component} from 'react';
import '../App.css';
import AddItemInterface from './AddItemInterface';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class AddTodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adding: false,
    };
  }

  render() {
    const addItemButton = (
      <Button
        variant='text'
        color='primary'
        onClick={() => this.setState({adding: !this.state.adding})}>
        <AddIcon color="action"/>Add
      </Button>);
    // const addItemButton = (
    //   <button onClick={() => this.setState({adding: !this.state.adding})}>
    //         Add item
    //   </button>);
    return (
      <div>
        {this.state.adding?
                <AddItemInterface
                  handleCancel={
                    () => this.setState({adding: !this.state.adding})
                  }/>:
                addItemButton}
      </div>
    );
  }
}

export default AddTodoItem;
