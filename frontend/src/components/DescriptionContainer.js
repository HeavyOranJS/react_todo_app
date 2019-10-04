import React, { Component } from 'react';

import EditDescription from './EditDescription';
import Description from './Description';


class DescriptionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  render() {
    if (this.state.editing) {
      return <EditDescription
            {...this.props}
            handleCancel={() => (this.setState({ editing: false }))}/>;
    }
    return <Description
            index={this.props.index}
            id={this.props.item.id}
            description={this.props.item.description}
            handleEdit={() => (this.setState({ editing: true }))}/>;
  }
}


export default DescriptionContainer;
