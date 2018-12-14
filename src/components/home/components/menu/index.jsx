import React, {Component} from 'react';
import './index.scss'
import {Carousel} from 'antd'
import {Link} from 'react-router-dom'
class Menu extends Component {
  render() {
    return (
      <div className='h_menu'>
        <Carousel>
          <div className={'h_menu_item'}>
            <Link to={'/menudetail/1'}>
              <img src={require('../../../../static/img/category/1.png')} alt=""/>
              <span>美食</span>
            </Link>
            <Link to={'/menudetail/2'}>
              <img src={require('../../../../static/img/category/2.png')} alt=""/>
              <span>午餐</span>
            </Link>
            <Link to={'/menudetail/3'}>
              <img src={require('../../../../static/img/category/3.png')} alt=""/>
              <span>商超便利</span>
            </Link>
            <Link to={'/menudetail/4'}>
              <img src={require('../../../../static/img/category/4.png')} alt=""/>
              <span>水果</span>
            </Link>
            <Link to={'/menudetail/5'}>
              <img src={require('../../../../static/img/category/5.png')} alt=""/>
              <span>医疗健康</span>
            </Link>
            <Link to={'/menudetail/6'}>
              <img src={require('../../../../static/img/category/6.png')} alt=""/>
              <span>鲜花绿植</span>
            </Link>
            <Link to={'/menudetail/7'}>
              <img src={require('../../../../static/img/category/7.png')} alt=""/>
              <span>厨房生鲜</span>
            </Link>
            <Link to={'/menudetail/8'}>
              <img src={require('../../../../static/img/category/8.png')} alt=""/>
              <span>跑腿代购</span>
            </Link>
            <Link to={'/menudetail/9'}>
              <img src={require('../../../../static/img/category/9.png')} alt=""/>
              <span>甜品饮品</span>
            </Link>
            <Link to={'/menudetail/10'}>
              <img src={require('../../../../static/img/category/10.png')} alt=""/>
              <span>签到领红包</span>
            </Link>
          </div>
          <div className={'h_menu_item'}>
            <Link to={'/menudetail/1'}>
              <img src={require('../../../../static/img/category/6.png')} alt=""/>
              <span>美食</span>
            </Link>
            <Link to={'/menudetail/1'}>
              <img src={require('../../../../static/img/category/6.png')} alt=""/>
              <span>美食</span>
            </Link>
            <Link to={'/menudetail/1'}>
              <img src={require('../../../../static/img/category/6.png')} alt=""/>
              <span>美食</span>
            </Link>
            <Link to={'/menudetail/1'}>
              <img src={require('../../../../static/img/category/6.png')} alt=""/>
              <span>美食</span>
            </Link>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Menu;