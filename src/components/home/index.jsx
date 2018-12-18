import React, {Component} from 'react';

import Toplocation from './components/toplocation/index'
import TopSerach from './components/topsearch'
import Menu from './components/menu/index'
import Rushbuy from './components/rushbuy/index'
import Banner from './components/banner/index'
import Recommond from './components/recommend/index'
import ShopMenu from './components/shopmenu/index'
import Allsort from './components/allsort/index'
import FootNav from '../base/footnav/index'


import './index.scss'

class Home extends Component {
  
  // 跳转到相应的商铺
  goShop = (id) => {
    console.log('触发home组件的函数 并接受到参数');
    console.log(id.id);
    this.props.history.push(`/shop/${id.id}`)
  }

  render() {
    console.log('home组件中');
    console.log(this.props);

    return (
      <div className='app'>

        {/* 顶部定位部分 */}
        <Toplocation />

        {/* 头部搜索框 */}
        <TopSerach />

        {/* 菜单部分 */}
        <Menu />

        {/* 抢购部分 */}
        <Rushbuy />

        {/* banner自动轮播部分 */}
        <Banner />

        {/* 推荐商家 */}
        <Recommond />

        {/* 综合排序 */}
        <ShopMenu />
        <Allsort
          go={this.goShop}
        />

        {/* 底部导航 */}
        <FootNav />
      </div>
    );
  }
}

export default Home;