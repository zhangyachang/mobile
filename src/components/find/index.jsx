import React, {Component} from 'react';

import TopPageInfo  from "../base/toppageinfo";

import FootNav from '../base/footnav'

import './index.scss'

class Find extends Component {
  render() {
    return (
      <div className={'find'}>
        <TopPageInfo
          title={'发现'}
        />

        {/* 头部banner图 */}
        <section className={'f_banner'}>
          <img src={require('../../static/img/find/1.jpg')} alt=""/>
        </section>

        {/* 金币商城 */}
        <section className={'f_gold_coin'}>
          <img src={require('../../static/img/find/2.png')} alt=""/>
        </section>

        {/* 限时好礼 */}
        <section className={'f_flash_gifts'}>
          <img src={require('../../static/img/find/3.png')} alt=""/>
        </section>

        {/* 底部导航 */}
        <FootNav></FootNav>
      </div>
    );
  }
}

export default Find;