import React, {Component} from 'react';
import './index.scss'
class ShopMenu extends Component {
  render() {
    return (
      <ul className={'h_shops_menu'}>
        <li className={'active'}>综合排序 <i className={'iconfont icon-f111'}></i> </li>
        <li>距离最近</li>
        <li>品质联盟</li>
        <li>筛选</li>
      </ul>
    );
  }
}

export default ShopMenu;