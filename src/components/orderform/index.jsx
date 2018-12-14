import React, {Component} from 'react';
import FootNav from '../base/footnav'
import TopPageInfo  from "../base/toppageinfo";


class OrderForm extends Component {
  render() {
    return (
      <div>

        <TopPageInfo
          title={'订单'}
        />
        {/* 底部导航 */}
        <FootNav></FootNav>
      </div>
    );
  }
}

export default OrderForm;