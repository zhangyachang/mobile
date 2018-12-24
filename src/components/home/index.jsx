import React, {Component} from 'react';

import Toplocation from './components/toplocation/index'
import TopSerach from './components/topsearch'
import Menu from './components/menu/index'
import Rushbuy from './components/rushbuy/index'
import Banner from './components/banner/index'
import Recommond from './components/recommend/index'
import ShopMenu from './components/shopmenu/index'
import Allsort from '../base/allsort/index'
import FootNav from '../base/footnav/index'

import Axios from 'axios'
import Config from '../../config/config.js'


import './index.scss'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      shoplist: []
    }
  }
  
  
  componentDidMount() {
    let {url} = Config;
    Axios.get(`${url}/api/shoplist`)
      .then(res =>{
        this.setState({
          shoplist: res.data.data
        })
      
      })
      .catch(err => {
        console.log('首页商家列表页面请求失败');
        
      })
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
          shoplist={this.state.shoplist}
        />

        {/* 底部导航 */}
        <FootNav />
      </div>
    );
  }
}

export default Home;