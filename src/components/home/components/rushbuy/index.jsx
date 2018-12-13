import React, {Component} from 'react';
import './index.scss'
class Rushbuy extends Component {
  render() {
    return (
      <div className='h_rushbuy pd20'>
        {/* 抢购部分 */}
        <div className={'hr_item'}>
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
        </div>
      </div>
    );
  }
}

export default Rushbuy;