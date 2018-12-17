import React, {Component} from 'react';

import TopPageInfo  from "../base/toppageinfo";
// import RowItem from './subcomponent/rowitem/index'
import FootNav from '../base/footnav'
import './index.scss'
class My extends Component {

  render() {
    return (
      <div className={'my'}>
        <TopPageInfo
          title={'我的'}
        />

        {/* 登录注册 */}
        <section className={'my_login'}>
          <div className={'my_login_icon'}>
            <img src={require('../../static/img/my/1.png')} alt=""/>
          </div>
          <div className={'my_login_status'}>
            <p className={'my_login_title'}>登录/注册</p>
            <p className={'my_login_tips'}>
              <i className={'iconfont icon-shouji1'}></i>
              登录后享受更多特权
            </p>
          </div>
          <div className={'my_login_right_icon'}>
            <i className={'iconfont icon-youjiantou'}></i>
          </div>
        </section>

        {/* 红包 */}
        <section className={'my_rp'}>
          <div className={'my_rp_item'}>
            <i className={'iconfont icon-renminbi1 yellow'}></i>
            <p>钱包</p>
          </div>
          <div className={'my_rp_item'}>
            <i className={'iconfont icon-hongbao red'}></i>
            <p>红包</p>
          </div>
          <div className={'my_rp_item'}>
            <i className={'iconfont icon-jinbi1 green'}></i>
            <p>金币</p>
          </div>
        </section>

        {/* 我的地址  */}
        <section className={'my_location'}>
          <div className={'my_row_item'}>
            <div className={'my_row_item_l_icon'}>
              <i className={'iconfont icon-mingpianjiaxiaochengxuicon_dizhi'}></i>
            </div>
            <p>
              <span>我的地址</span>
            </p>
            <div className={'my_row_item_r_icon'}>
              <i className={'iconfont icon-youjiantou'}></i>
            </div>
          </div>
        </section>

        {/* 金币商城 */}
        <section className={'my_gold_mall'}>
          <div className={'my_row_item'}>
            <div className={'my_row_item_l_icon'}>
              <i className={'iconfont icon-shangcheng1'} style={{color: '#92D84E'}}></i>
            </div>
            <p>
              <span>金币商城</span>
            </p>
            <div className={'my_row_item_r_icon'}>
              <i className={'iconfont icon-youjiantou'}></i>
            </div>
          </div>

          <div className={'my_row_item'}>
            <div className={'my_row_item_l_icon'}>
              <i className={'iconfont icon-libao1'} style={{color: '#FB7A53'}}></i>
            </div>
            <p>
              <span>分享拿10元现金</span>
            </p>
            <div className={'my_row_item_r_icon'}>
              <i className={'iconfont icon-youjiantou'}></i>
            </div>
          </div>

        </section>

        {/* 我的客服和下载 */}
        <section className={'my_customer'}>
          <div className={'my_row_item'}>
            <div className={'my_row_item_l_icon'}>
              <i className={'iconfont icon-kefu'} style={{color: '#4BA5EE'}}></i>
            </div>
            <p>
              <span>我的客服</span>
            </p>
            <div className={'my_row_item_r_icon'}>
              <i className={'iconfont icon-youjiantou'}></i>
            </div>
          </div>

          <div className={'my_row_item'}>
            <div className={'my_row_item_l_icon'}>
              <i className={'iconfont icon-xiazai'} style={{color: '#4BA5EE'}}></i>
            </div>
            <p>
              <span>下载饿了吗APP</span>
            </p>
            <div className={'my_row_item_r_icon'}>
              <i className={'iconfont icon-youjiantou'}></i>
            </div>
          </div>

        </section>


        {/* 底部导航 */}
        <FootNav></FootNav>
      </div>
    );
  }
}

export default My;
