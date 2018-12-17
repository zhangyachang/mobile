import React, {Component} from 'react';

import './index.scss'

class Back extends Component {

  back = () => {
    window.history.go(-1);
  };

  render() {
    return (
      <div className={'back'}>
        <i onClick={this.back} className={'iconfont icon-fanhui2'}></i>
      </div>
    );
  }
}

export default Back;