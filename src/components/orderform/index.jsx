import React, {Component} from 'react';
import FootNav from '../base/footnav'
import TopPageInfo  from "../base/toppageinfo";

import './index.scss'
class OrderForm extends Component {
  render() {
    return (
      <div className={'order'}>

        <TopPageInfo
          title={'订单'}
        />

        {/* 登录 */}
        <section className={'o_login'}>
          <img src={require('../../static/img/orderform/2.png')} alt=""/>
        </section>

        {/* 底部导航 */}
        <FootNav></FootNav>
      </div>
    );
  }
}

export default OrderForm;