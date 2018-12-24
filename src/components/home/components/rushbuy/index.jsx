import React, {Component} from 'react';
import './index.scss'

import Axios from 'axios'
import Config from '../../../../config/config.js'


class Rushbuy extends Component {
  state = {
    rushbuy: []
  };
  componentDidMount() {
    let {url} = Config;
    Axios.get(`${url}/api/scarebuy`)
      .then(res => {
        console.log('抢购页面的数据');
        console.log(res);
        this.setState({
          rushbuy: res.data.data
        })
      })
      .catch(err =>{
        console.log('抢购请求失败');
      })
  }
  
  
  render() {
    return (
      <div className='h_rushbuy pd20'>
        {/* 抢购部分 */}
        {
          this.state.rushbuy.length>0 && this.state.rushbuy.map((item, index) => {
            return (
              <div key={item.id} className={'hr_item'}>
                {/*<h3 className={'hr_quality_title title'}>{item.title}</h3>*/}
                {/*<p className={'hr_quality_desc'}>搭配齐全吃的好</p>*/}
                {/*<p className={'hr_quality_rush'}>立即抢购 > </p>*/}
                <img className={'hr_item_img'} src={item.img} alt=""/>
              </div>
            )
          })
        }
        {/*<div className={'hr_item'}>
          <h3 className={'hr_quality_title title'}>品质套餐</h3>
          <p className={'hr_quality_desc'}>搭配齐全吃的好</p>
          <p className={'hr_quality_rush'}>立即抢购 > </p>
          <img className={'hr_item_img'} src={require('../../../../static/img/rushbuy/1.png')} alt=""/>
        </div>
        <div className={'hr_item'}>
          <h3 className={'hr_rushbuy_title title'}>限量抢购</h3>
          <p className={'hr_quality_desc'}>超值美味9.9元起</p>
          <p className={'hr_quality_rush'} style={{color: '#000'}}><span style={{color: 'red'}}>2536</span>人正在抢> </p>
          <img className={'hr_item_img'} src={require('../../../../static/img/rushbuy/2.png')} alt=""/>
        </div>*/}
      </div>
    );
  }
}

export default Rushbuy;