import React, {Component} from 'react';

class Layout extends Component {
  render() {
    console.log('layout');
    console.log(this);

    console.log(this.props.children);
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;