import React, {Component} from 'react';
import AddItem from './AddItem';

class AddItemContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adding: false,
    };
  }

  render() {
    const addItemButton = (
      <div
        className='add-item-button item btn'
        onClick={() => this.setState({adding: !this.state.adding})}>
          Add item
      </div>
    );

    const addItem = (
      <AddItem handleCancel={
        () => this.setState({adding: !this.state.adding})
      }/>
    );
    return (
        this.state.adding?
                addItem:
                addItemButton
    );
  }
}

export default AddItemContainer;
