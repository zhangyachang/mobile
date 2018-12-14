import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import './index.scss'
class Footnav extends Component {
  render() {
    return (
      <div className={'h_footnav'}>
        <div className={'h_footnav_item hf_active'}>
          <NavLink exact to={'/'} activeClassName={'hf_active'}>
            <i className={'iconfont icon-tansuob1'}></i>
            <span>首页</span>
          </NavLink>
        </div>
        <div className={'h_footnav_item'}>
          <NavLink to={'/find'} activeClassName={'hf_active'}>
            <i className={'iconfont icon-faxian'}></i>
            <span>发现</span>
          </NavLink>
        </div>
        <div className={'h_footnav_item'}>
          <NavLink to={'/orderform'} activeClassName={'hf_active'}>
            <i className={'iconfont icon-icon--copy'}></i>
            <span>订单</span>
          </NavLink>
        </div>
        <div className={'h_footnav_item'}>
          <NavLink to={'/my'} activeClassName={'hf_active'}>
            <i className={'iconfont icon-wode'}></i>
            <span>我的</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Footnav;