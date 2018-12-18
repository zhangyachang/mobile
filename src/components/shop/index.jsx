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
          
        </section>

      </div>
    )
  }
}

export default Shop
// shopç»„ä»¶

    
