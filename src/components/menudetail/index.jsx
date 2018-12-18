import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import './index.scss'
import TopPageInfo from '../base/toppageinfo'
import ShopMenu from '../home/components/shopmenu/index'
import AllSort from '../home/components/allsort/index'

class MenuDetail extends Component {
  render() {

    console.log('传递过来了什么');
    console.log(this.props);
    console.log(`传递过来的参数${JSON.stringify(this.props.match.params)}`);

    return (
      <div className={'menu_detail'}>
        {/* 菜单的详情页 */}
        <TopPageInfo
          title={'美食'}
        />

        {/* 菜单 */}
        <section className={'md_menu pd20'}>
          <div className="md_menu_list">
            <ul className='me_menu_list_ul'>
              <li>
                <NavLink exact to={'/menudetail/99'} activeClassName={'active'}>
                  全部
                </NavLink>
              </li>
              <li>
                <NavLink to={'/menudetail/1'}>
                  简餐便当
                </NavLink>
              </li>
              <li>
                <NavLink to={'/menudetail/2'}>
                  小吃炸串
                </NavLink>
              </li>
              <li>
                <NavLink to={'/menudetail/100'}>
                  面食粥点
                </NavLink>
              </li>
              <li>
                <NavLink to={'/menudetail/4'}>
                  地方菜系
                </NavLink>
              </li>
              <li>
                <NavLink to={'/menudetail/5'}>
                  香锅冒菜
                </NavLink>
              </li>
              <li>
                <NavLink to={'/menudetail/6'}>
                  日韩料理
                </NavLink>
              </li>
              <li>
                <NavLink to={'/menudetail/7'}>
                  汉堡披萨
                </NavLink>
              </li>
            </ul>
          </div>
          <i className={'iconfont icon-ico_open'}></i>
        </section>

        {/* 顶部遮罩层 */}
        <ShopMenu />

        {/* 商品菜单 */}
        <div className={'md_shop_list'}>
          <AllSort></AllSort>
        </div>


      </div>
    );
  }
}

export default MenuDetail;