import React, {Component} from 'react';

import './index.scss'

class Search extends Component {
  render() {
    return (
      <div className={'s_search'}>
        {/* 搜索框 */}
        <section className={'s_search_wrapper pd20'}>
          <i className={'iconfont icon-fanhui2'}></i>
          <div className={'s_box'}>
            <i className={'iconfont icon-ziyuan'}></i>
            <input type="text" placeholder={'输入商家、商品名称'}/>
          </div>
          <button type='submit' className={'s_search_btn'}>搜索</button>
        </section>

        {/* 热门搜索 */}

        <div className={'s_s_hot pd20'}>
          <h4>热门搜索</h4>
          <div className={'s_s_hot_list'}>
            <a className={'item'} href="/">星巴克</a>
            <a className={'item'} href="/">韭菜</a>
            <a className={'item'} href="/">泡芙</a>
            <a className={'item'} href="/">热干面</a>
            <a className={'item'} href="/">麻辣烫</a>
            <a className={'item'} href="/">火锅</a>
            <a className={'item'} href="/">面</a>
            <a className={'item'} href="/">粥</a>
            <a className={'item'} href="/">板栗</a>
            <a className={'item'} href="/">煲仔饭</a>
          </div>
        </div>

      </div>
    );
  }
}

export default Search;