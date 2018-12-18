import React, {Component} from 'react';

class Layout extends Component {
  render() {
    console.log('layout');
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;