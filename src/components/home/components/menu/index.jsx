import React, {Component} from 'react';
import './index.scss'

import {Carousel} from 'antd'
class Menu extends Component {
  render() {
    return (
      <div className='h_menu'>
        <Carousel>
          <div className={'h_menu_item'}>
            <a href="/">
              <img src={require('../../../../static/img/category/1.png')} alt=""/>
              <span>美食</span>
            </a>
            <a href="/">
              <img src={require('../../../../static/img/category/2.png')} alt=""/>
              <span>午餐</span>
            </a>
            <a href="/">
              <img src={require('../../../../static/img/category/3.png')} alt=""/>
              <span>商超便利</span>
            </a>
            <a href="/">
              <img src={require('../../../../static/img/category/4.png')} alt=""/>
              <span>水果</span>
            </a>
            <a href="/">
              <img src={require('../../../../static/img/category/5.png')} alt=""/>
              <span>医疗健康</span>
            </a>
            <a href="/">
              <img src={require('../../../../static/img/category/6.png')} alt=""/>
              <span>鲜花绿植</span>
            </a>
            <a href="/">
              <img src={require('../../../../static/img/category/7.png')} alt=""/>
              <span>厨房生鲜</span>
            </a>
            <a href="/">
              <img src={require('../../../../static/img/category/8.png')} alt=""/>
              <span>跑腿代购</span>
            </a>
            <a href="/">
              <img src={require('../../../../static/img/category/9.png')} alt=""/>
              <span>甜品饮品</span>
            </a>
            <a href="/">
              <img src={require('../../../../static/img/category/10.png')} alt=""/>
              <span>签到领红包</span>
            </a>
          </div>
          <div className={'h_menu_item'}>
            <a href="/">
              <img src={require('../../../../static/img/category/6.png')} alt=""/>
              <span>美食</span>
            </a>
            <a href="/">
              <img src={require('../../../../static/img/category/6.png')} alt=""/>
              <span>美食</span>
            </a>
            <a href="/">
              <img src={require('../../../../static/img/category/6.png')} alt=""/>
              <span>美食</span>
            </a>
            <a href="/">
              <img src={require('../../../../static/img/category/6.png')} alt=""/>
              <span>美食</span>
            </a>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Menu;