import React, {Component} from 'react';
import '../App.css';

import {ApiContext} from '../etc/APIContext';


class AddItemInterface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
    };

    this.addItem = this.addItem.bind(this);
  }

  async addItem() {
    const {itemName, itemDescription} = this.state;
    const headers = {'Content-Type': 'application/json'};
    const body = JSON.stringify(
        {
          'title': itemName,
          'completed': false,
          'description': itemDescription}
    );

    await fetch(this.context.api, {headers, method: 'POST', body});

    this.props.handleUpdate();
    this.props.handleCancel();
  }

  render() {
    return <div>
      <input
        name='todoItemName'
        placeholder='item name'
        type='text'
        onChange={(event) => this.setState({itemName: event.target.value})}>
      </input>
      <textarea
        name='todoItemDescription'
        placeholder='item description'
        rows="4"
        cols="50"
        onChange={
          (event) => this.setState({itemDescription: event.target.value})
        }>
      </textarea>
      <button onClick={this.addItem}>Add</button>
      <button onClick={this.props.handleCancel}>Cancel</button>
    </div>;
  }
}

AddItemInterface.contextType = ApiContext;

export default AddItemInterface;
