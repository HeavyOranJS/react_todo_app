import React, { Component } from 'react';

import DescriptionContainer from './DescriptionContainer';
import EditItem from './EditItem';
import Item from './Item';

class ItemContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      open: false,
    };
  }

  renderItem(editing) {
    if (editing) {
      return <EditItem
        {...this.props}
        handleCancel={() => this.setState({ editing: false })}/>;
    }
    return <Item
      {...this.props}
      open={this.state.open}
      handleEdit={() => this.setState({ editing: true })}
      handleCollapse={() => this.setState({ open: !this.state.open })}/>;
  }

  render() {
    return (
      <li className='item'>
        {this.renderItem(this.state.editing)}
        {
          this.state.open
            && <DescriptionContainer
              {...this.props}/>
        }
      </li>
    );
  }
}

export default ItemContainer;
