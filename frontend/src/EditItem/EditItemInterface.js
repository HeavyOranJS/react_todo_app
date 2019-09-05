import React, {Component} from 'react';
import '../App.css';

import {ApiContext} from '../etc/APIContext';

class EditItemInterface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
    };

    this.editItem = this.editItem.bind(this);
  }

  async editItem() {
    const current = this.props.item;
    const headers = {'Content-Type': 'application/json'};
    const body = JSON.stringify(
        {
          'id': current.id,
          'title': this.state.title,
          'description': this.state.description,
          'completed': current.completed,
        }
    );

    await fetch(
        this.context.api + current.id + '/',
        {headers, method: 'PUT', body}
    );

    this.props.handleUpdate();
    this.props.handleCancel();
  }

  componentDidMount() {
    this.setState({
      title: this.props.item.title,
      description: this.props.item.description,
    });
  }

  render() {
    return <div>
      <input
        name='todoItemName'
        value={this.state.title}
        placeholder='item name'
        type='text'
        onChange={(event) => this.setState({title: event.target.value})}>
      </input>
      <textarea
        name='todoItemDescription'
        value={this.state.description}
        placeholder='item description'
        rows="4"
        cols="50"
        onChange={
          (event) => this.setState({description: event.target.value})
        }>
      </textarea>
      <button onClick={this.editItem}>Submit</button>
      <button onClick={this.props.handleCancel}>Cancel</button>
    </div>;
  }
}

EditItemInterface.contextType = ApiContext;

export default EditItemInterface;
