import React, { Component } from 'react'
import {NavLink} from "react-router-dom";


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
          <p className={'s_shop_con'}>
            <span className={'s_score'}>评价{4.7}</span>
            <span className={'s_sale'}>月售{698}单</span>
            <span className={'s_s_time'}>商家配送36分钟</span>
          </p>
          <p className={'s_onsale'}>
            <span className={'s_onsale_tag'}>满减</span>
            <span className={'s_onsale_new'}>新用户下单立减17元(不与其他活动同享)</span>
            <span>{13}个优惠</span>
          </p>
          <p className={'s_notice'}>
            公告：11月28日起，海陆空三维大餐
          </p>

        </section>
        
        
        {/* 商家导航 */}
        <section className={'s_s_nav'}>
          <div>
            <NavLink to={'/shop'} className={'s_selected'} activeClassName="s_selected">点餐</NavLink>
          </div>
          <div>
            <NavLink to={'/aaa'} activeClassName="s_selected">评价</NavLink>
          </div>
          <div>
            <NavLink to={'/aaa'} activeClassName="s_selected">商家</NavLink>
          </div>
        </section>
        
        {/* 广告图 */}
        <section className={'s_s_banner pd20'}>
          <img src={require('../../static/img/shop/3.png')} alt=""/>
        </section>
        
        
        {/* 商家食品列表 */}
        <section className={'s_content'}>
          
          {/* 左侧导航 */}
          <div className={'s_c_leftnav'}>
            <ul className={'s_c_l_list'}>
              <li className={'s_c_active'}>热销</li>
              <li>优惠</li>
              <li>人气主食</li>
              <li>套餐系列</li>
              <li>炸鸡系列</li>
              <li>披萨</li>
              <li>饮品系列</li>
              <li>甜品系列</li>
              <li>酱料包选项</li>
              <li>饿了吗美食</li>
            </ul>
          </div>
          
          {/* 右侧视食品列表 */}
          <div className={'s_list_layer'}>
            <div className={'s_c_rightcon'}>
              <ul className={'s_c_rightcon_list'}>
                <li>
                  <div className='s_c_rightcon_img_wrapper'>
                    <img src={require('../../static/img/shop/4.png')} alt=""/>
                  </div>
                  <div className={'s_c_con'}>
                    <h4>田园鸡蔬堡</h4>
                    <p className='s_c_con_des'>鸡肉、蔬菜混合制成田园饼独具风12312123这里的</p>
                    <p>
                      <span>月售{20}份</span>
                      <span>好评率{'100%'}</span>
                    </p>
                    <div className='s_c_price'>
                      <div className='s_c_price_con'>
                        <i className={'iconfont icon-renminbi1'}></i>
                        10
                      </div>
                      <div className={'s_c_add'}>
                        <i className='iconfont icon-jiahao'></i>
                      </div>
                    </div>
                  </div>
                </li>
      
                <li>
                  <div className='s_c_rightcon_img_wrapper'>
                    <img src={require('../../static/img/shop/5.png')} alt=""/>
                  </div>
                  <div className={'s_c_con'}>
                    <h4>田园鸡蔬堡</h4>
                    <p className='s_c_con_des'>鸡肉、蔬菜混合制成田园饼独具风12312123这里的</p>
                    <p>
                      <span>月售{20}份</span>
                      <span>好评率{'100%'}</span>
                    </p>
                    <div className='s_c_price'>
                      <div className='s_c_price_con'>
                        <i className={'iconfont icon-renminbi1'}></i>
                        10
                      </div>
                      <div className={'s_c_add'}>
                        <i className='iconfont icon-jiahao'></i>
                      </div>
                    </div>
                  </div>
                </li>
      
                <li>
                  <div className='s_c_rightcon_img_wrapper'>
                    <img src={require('../../static/img/shop/6.png')} alt=""/>
                  </div>
                  <div className={'s_c_con'}>
                    <h4>田园鸡蔬堡</h4>
                    <p className='s_c_con_des'>鸡肉、蔬菜混合制成田园饼独具风12312123这里的</p>
                    <p>
                      <span>月售{20}份</span>
                      <span>好评率{'100%'}</span>
                    </p>
                    <div className='s_c_price'>
                      <div className='s_c_price_con'>
                        <i className={'iconfont icon-renminbi1'}></i>
                        10
                      </div>
                      <div className={'s_c_add'}>
                        <i className='iconfont icon-jiahao'></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='s_c_rightcon_img_wrapper'>
                    <img src={require('../../static/img/shop/5.png')} alt=""/>
                  </div>
                  <div className={'s_c_con'}>
                    <h4>田园鸡蔬堡</h4>
                    <p className='s_c_con_des'>鸡肉、蔬菜混合制成田园饼独具风12312123这里的</p>
                    <p>
                      <span>月售{20}份</span>
                      <span>好评率{'100%'}</span>
                    </p>
                    <div className='s_c_price'>
                      <div className='s_c_price_con'>
                        <i className={'iconfont icon-renminbi1'}></i>
                        10
                      </div>
                      <div className={'s_c_add'}>
                        <i className='iconfont icon-jiahao'></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='s_c_rightcon_img_wrapper'>
                    <img src={require('../../static/img/shop/5.png')} alt=""/>
                  </div>
                  <div className={'s_c_con'}>
                    <h4>田园鸡蔬堡</h4>
                    <p className='s_c_con_des'>鸡肉、蔬菜混合制成田园饼独具风12312123这里的</p>
                    <p>
                      <span>月售{20}份</span>
                      <span>好评率{'100%'}</span>
                    </p>
                    <div className='s_c_price'>
                      <div className='s_c_price_con'>
                        <i className={'iconfont icon-renminbi1'}></i>
                        10
                      </div>
                      <div className={'s_c_add'}>
                        <i className='iconfont icon-jiahao'></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='s_c_rightcon_img_wrapper'>
                    <img src={require('../../static/img/shop/5.png')} alt=""/>
                  </div>
                  <div className={'s_c_con'}>
                    <h4>田园鸡蔬堡</h4>
                    <p className='s_c_con_des'>鸡肉、蔬菜混合制成田园饼独具风12312123这里的</p>
                    <p>
                      <span>月售{20}份</span>
                      <span>好评率{'100%'}</span>
                    </p>
                    <div className='s_c_price'>
                      <div className='s_c_price_con'>
                        <i className={'iconfont icon-renminbi1'}></i>
                        10
                      </div>
                      <div className={'s_c_add'}>
                        <i className='iconfont icon-jiahao'></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='s_c_rightcon_img_wrapper'>
                    <img src={require('../../static/img/shop/5.png')} alt=""/>
                  </div>
                  <div className={'s_c_con'}>
                    <h4>田园鸡蔬堡</h4>
                    <p className='s_c_con_des'>鸡肉、蔬菜混合制成田园饼独具风12312123这里的</p>
                    <p>
                      <span>月售{20}份</span>
                      <span>好评率{'100%'}</span>
                    </p>
                    <div className='s_c_price'>
                      <div className='s_c_price_con'>
                        <i className={'iconfont icon-renminbi1'}></i>
                        10
                      </div>
                      <div className={'s_c_add'}>
                        <i className='iconfont icon-jiahao'></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='s_c_rightcon_img_wrapper'>
                    <img src={require('../../static/img/shop/5.png')} alt=""/>
                  </div>
                  <div className={'s_c_con'}>
                    <h4>田园鸡蔬堡</h4>
                    <p className='s_c_con_des'>鸡肉、蔬菜混合制成田园饼独具风12312123这里的</p>
                    <p>
                      <span>月售{20}份</span>
                      <span>好评率{'100%'}</span>
                    </p>
                    <div className='s_c_price'>
                      <div className='s_c_price_con'>
                        <i className={'iconfont icon-renminbi1'}></i>
                        10
                      </div>
                      <div className={'s_c_add'}>
                        <i className='iconfont icon-jiahao'></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='s_c_rightcon_img_wrapper'>
                    <img src={require('../../static/img/shop/5.png')} alt=""/>
                  </div>
                  <div className={'s_c_con'}>
                    <h4>田园鸡蔬堡</h4>
                    <p className='s_c_con_des'>鸡肉、蔬菜混合制成田园饼独具风12312123这里的</p>
                    <p>
                      <span>月售{20}份</span>
                      <span>好评率{'100%'}</span>
                    </p>
                    <div className='s_c_price'>
                      <div className='s_c_price_con'>
                        <i className={'iconfont icon-renminbi1'}></i>
                        10
                      </div>
                      <div className={'s_c_add'}>
                        <i className='iconfont icon-jiahao'></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='s_c_rightcon_img_wrapper'>
                    <img src={require('../../static/img/shop/5.png')} alt=""/>
                  </div>
                  <div className={'s_c_con'}>
                    <h4>田园鸡蔬堡</h4>
                    <p className='s_c_con_des'>鸡肉、蔬菜混合制成田园饼独具风12312123这里的</p>
                    <p>
                      <span>月售{20}份</span>
                      <span>好评率{'100%'}</span>
                    </p>
                    <div className='s_c_price'>
                      <div className='s_c_price_con'>
                        <i className={'iconfont icon-renminbi1'}></i>
                        10
                      </div>
                      <div className={'s_c_add'}>
                        <i className='iconfont icon-jiahao'></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='s_c_rightcon_img_wrapper'>
                    <img src={require('../../static/img/shop/5.png')} alt=""/>
                  </div>
                  <div className={'s_c_con'}>
                    <h4>田园鸡蔬堡</h4>
                    <p className='s_c_con_des'>鸡肉、蔬菜混合制成田园饼独具风12312123这里的</p>
                    <p>
                      <span>月售{20}份</span>
                      <span>好评率{'100%'}</span>
                    </p>
                    <div className='s_c_price'>
                      <div className='s_c_price_con'>
                        <i className={'iconfont icon-renminbi1'}></i>
                        10
                      </div>
                      <div className={'s_c_add'}>
                        <i className='iconfont icon-jiahao'></i>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        
        
        </section>
        
        
        {/* 底部购物车 */}
        <section className={'s_shopcart'}>
          <div className='s_cart_icon s_cart_has'>
            <i className='iconfont icon-gouwuche'></i>
            <span className='s_cart_num'>1</span>
          </div>
          <div className='s_cart_des'>
            <p>未选购商品</p>
            <p>另需配送费2元</p>
          </div>
          <div className='s_shop_send'>
            ￥10元起送
          </div>
        </section>
        
      </div>
    )
  }
}

export default Shop


    
