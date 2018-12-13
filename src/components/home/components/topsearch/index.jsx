import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './index.scss'

class Topsearch extends Component {
  render() {
    return (
      <div className="h_search_wrapper">
        {/* 头部搜索框 */}
        <Link to={'/search'}>
          <div className={'h_search'}>
            <i className={'iconfont icon-xingtaiduICON_sousuo---copy'} />
            <span>搜索饿了吗商家、商品名称</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default Topsearch;