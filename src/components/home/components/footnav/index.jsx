import React, {Component} from 'react';

import './index.scss'
class Footnav extends Component {
  render() {
    return (
      <div className={'h_footnav'}>
        <div className={'h_footnav_item hf_active'}>
          <i className={'iconfont icon-tansuob1'}></i>
          <span>首页</span>
        </div>
        <div className={'h_footnav_item'}>
          <i className={'iconfont icon-faxian'}></i>
          <span>发现</span>
        </div>
        <div className={'h_footnav_item'}>
          <i className={'iconfont icon-icon--copy'}></i>
          <span>订单</span>
        </div>
        <div className={'h_footnav_item'}>
          <i className={'iconfont icon-wode'}></i>
          <span>我的</span>
        </div>
      </div>
    );
  }
}

export default Footnav;