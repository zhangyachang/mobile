import React, {Component} from 'react';

import {Link} from 'react-router-dom'
import { Carousel } from 'antd';

import './index.scss'

class Home extends Component {
  render() {
    return (
      <div className='app'>

        {/* 顶部定位部分 */}
        <div className='h_top_location'>
          <div className={'h_top_content'}>
            <i className={'iconfont icon-mingpianjiaxiaochengxuicon_dizhi'} />
            <span>工业区</span>
            <i className={'iconfont icon-f111'}/>
          </div>
        </div>

        {/* 头部搜索框 */}
        <div className="h_search_wrapper">
          <Link to={'/search'}>
            <div className={'h_search'}>
              <i className={'iconfont icon-xingtaiduICON_sousuo---copy'}></i>
              <span>搜索饿了吗商家、商品名称</span>
            </div>
          </Link>
        </div>


        {/* 菜单部分 */}
        <div className='h_menu'>
          <Carousel>
            <div className={'h_menu_item'}>
              <a href="/">
                <img src={require('../../static/img/category/1.png')} alt=""/>
                <span>美食</span>
              </a>
              <a href="/">
                <img src={require('../../static/img/category/2.png')} alt=""/>
                <span>午餐</span>
              </a>
              <a href="/">
                <img src={require('../../static/img/category/3.png')} alt=""/>
                <span>商超便利</span>
              </a>
              <a href="/">
                <img src={require('../../static/img/category/4.png')} alt=""/>
                <span>水果</span>
              </a>
              <a href="/">
                <img src={require('../../static/img/category/5.png')} alt=""/>
                <span>医疗健康</span>
              </a>
              <a href="/">
                <img src={require('../../static/img/category/6.png')} alt=""/>
                <span>鲜花绿植</span>
              </a>
              <a href="/">
                <img src={require('../../static/img/category/7.png')} alt=""/>
                <span>厨房生鲜</span>
              </a>
              <a href="/">
                <img src={require('../../static/img/category/8.png')} alt=""/>
                <span>跑腿代购</span>
              </a>
              <a href="/">
                <img src={require('../../static/img/category/9.png')} alt=""/>
                <span>甜品饮品</span>
              </a>
              <a href="/">
                <img src={require('../../static/img/category/10.png')} alt=""/>
                <span>签到领红包</span>
              </a>
            </div>
            <div className={'h_menu_item'}>
              <a href="/">
                <img src={require('../../static/img/category/6.png')} alt=""/>
                <span>美食</span>
              </a>
              <a href="/">
                <img src={require('../../static/img/category/6.png')} alt=""/>
                <span>美食</span>
              </a>
              <a href="/">
                <img src={require('../../static/img/category/6.png')} alt=""/>
                <span>美食</span>
              </a>
              <a href="/">
                <img src={require('../../static/img/category/6.png')} alt=""/>
                <span>美食</span>
              </a>
            </div>
          </Carousel>
        </div>

        {/* 抢购部分 */}
        <div className='h_rushbuy pd20'>
          <div className={'hr_item'}>
            <h3 className={'hr_quality_title title'}>品质套餐</h3>
            <p className={'hr_quality_desc'}>搭配齐全吃的好</p>
            <p className={'hr_quality_rush'}>立即抢购 > </p>
            <img className={'hr_item_img'} src={require('../../static/img/rushbuy/1.png')} alt=""/>
          </div>
          <div className={'hr_item'}>
            <h3 className={'hr_rushbuy_title title'}>限量抢购</h3>
            <p className={'hr_quality_desc'}>超值美味9.9元起</p>
            <p className={'hr_quality_rush'} style={{color: '#000'}}><span style={{color: 'red'}}>2536</span>人正在抢> </p>
            <img className={'hr_item_img'} src={require('../../static/img/rushbuy/2.png')} alt=""/>
          </div>
        </div>

        {/* banner自动轮播部分 */}
        <div className={'h_banner pd20'}>
          <Carousel autoplay>
            <div>
              <a href="/">
                <img src={require('../../static/img/banner/1.webp')} alt=""/>
              </a>
            </div>
            <div>
              <a href="/">
                <img src={require('../../static/img/banner/2.webp')} alt=""/>
              </a>
            </div>
            <div>
              <a href="/">
                <img src={require('../../static/img/banner/3.webp')} alt=""/>
              </a>
            </div>
            <div>
              <a href="/">
                <img src={require('../../static/img/banner/4.webp')} alt=""/>
              </a>
            </div>
            <div>
              <a href="/">
                <img src={require('../../static/img/banner/5.webp')} alt=""/>
              </a>
            </div>
          </Carousel>
        </div>

        {/* 推荐商家 */}
        <div className={'h_recommend'}>
          <h3 className={'h_recommend_title'}>推荐商家</h3>
        </div>

        {/* 综合排序 */}
        <div className={'h_shops pd20'}>

          <ul className={'h_shops_menu'}>
            <li className={'active'}>综合排序 <i className={'iconfont icon-f111'}></i> </li>
            <li>距离最近</li>
            <li>品质联盟</li>
            <li>筛选</li>
          </ul>

          <section className={'h_shop_list'}>
            <section className={'h_shop_list_item'}>
              <div className={'hsli_logo'}>
                <img src={require('../../static/img/shoplogo/1.webp')} alt=""/>
              </div>
              <div>

              </div>
            </section>
          </section>
        </div>

      </div>
    );
  }
}

export default Home;