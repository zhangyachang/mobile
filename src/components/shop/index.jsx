import React, { Component } from 'react'

import './index.scss'
export class Shop extends Component {
  render() {
    return (
      <div className={'shop'}>
        {/* shop组件 */}

        {/* 商家logo */}
        <div className='s_logo_wrapper'>
          <img src={require('../../static/img/shop/1.png')} alt=""/>
          <div className='s_logo'>
            <img src={require('../../static/img/shop/2.png')} alt=""/>
          </div>
        </div>
        
        {/* 商家 介绍*/}
        <section className='s_description'>
          <h2 className={'s_shop_name'}>
            深圳麦当劳海岸城餐厅
            <i className={'iconfont icon-youjiantou1'}></i>
          </h2>
          <p>
            <span className={'s_score'}>评价{4.7}</span>
            <span className={'s_sale'}>月售{698}单</span>
            <span>商家配送36分钟</span>
          </p>
          <div>
            <p>
              <i className={'iconfont '}></i>
              <span>新用户下单立减17元(不与其他活动同享)</span>
              <span>{13}个优惠</span>
            </p>
          </div>
          <p>
            公告：11月28日起，海陆空三维大餐
          </p>

        </section>

      </div>
    )
  }
}

export default Shop
// shopç»„ä»¶

    
