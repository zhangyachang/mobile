import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom'
import {Link} from'react-router-dom'

import './index.scss'
import {Rate} from 'antd'

class Allsort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoplist: this.props.shoplist
    }
  }
 
  
  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      shoplist: nextProps.shoplist
    })
  }
  
  render() {
    console.log('商家列表页面');
    console.log(this.props);
    console.log('自定义属性');
    console.log(this.state);
    
    return (
      <div className={'h_shops pd20'}>
        <section className={'h_shop_list'}>
          {
            this.state.shoplist && this.state.shoplist.map((item, index) => {
              return (
                <section key={item.id} className={'h_shop_list_item'}>
                  <Link to={`/api/detail/${item.id}`}>
                    <div className={'h_shop_list_con'}>
                      <div className={'hsli_logo'}>
                        <img src={item.img} alt=""/>
                      </div>
                      <div className={'h_shop_list_con_info'}>
                        <p className={'h_shop_list_con_info_title'}>{item.title}</p>
                        <span className={'h_shop_list_star'}>
                          <Rate allowHalf disabled defaultValue={item.ratingScore} />
                          {<span className={'ant-rate-text'}>{`${item.ratingScore} 月售 ${item.monthSaleCount} 单`}</span>}
                        </span>
                        <p className={'h_shop_list_con_info_int'}>
                          <span>￥{item.startPrice}元起送</span>
                          <span>配送费￥{item.freightPrice}元</span>
                        </p>
                      </div>
                    </div>
                    <div className={'h_shop_list_cheap'}>
                      <p><span>汉堡</span> <span style={{color: '#e8470b'}}>口碑人气店</span></p>
                      <p>
                        <span className={'h_shop_list_cheap_itemspan'} style={{background: '#6EBB49'}}>首</span>
                        <span>新用户下单立减17元</span>
                      </p>
                      <p>
                        <span className={'h_shop_list_cheap_itemspan'} style={{background: '#EF7373'}}>减</span>
                        <span>满28减19，满45减24</span>
                      </p>
                      <div className="h_shop_list_cheap_listbtn">
                        21个活动
                        <i className={'iconfont icon-f111'}></i>
                      </div>
                    </div>
                  </Link>
                  
                </section>
              )
            })
          }
          {/*<section onClick={this.go.bind(null, '111')} className={'h_shop_list_item'}>
            <div className={'h_shop_list_con'}>
              <div className={'hsli_logo'}>
                <img src={require('../../../static/img/shoplogo/1.webp')} alt=""/>
              </div>
              <div className={'h_shop_list_con_info'}>
                <p className={'h_shop_list_con_info_title'}>麦克基（炸鸡汉堡）</p>
                <span className={'h_shop_list_star'}>
                    <Rate allowHalf disabled defaultValue={2.5} />
                  {<span className={'ant-rate-text'}>{`4.5 月售 6044 单`}</span>}
                  </span>
                <p className={'h_shop_list_con_info_int'}>
                  <span>￥{20}元起送</span>
                  <span>配送费￥{17}元</span>
                </p>
              </div>
            </div>
            <div className={'h_shop_list_cheap'}>
              <p><span>汉堡</span> <span style={{color: '#e8470b'}}>口碑人气店</span></p>
              <p>
                <span className={'h_shop_list_cheap_itemspan'} style={{background: '#6EBB49'}}>首</span>
                <span>新用户下单立减17元</span>
              </p>
              <p>
                <span className={'h_shop_list_cheap_itemspan'} style={{background: '#EF7373'}}>减</span>
                <span>满28减19，满45减24</span>
              </p>
              <div className="h_shop_list_cheap_listbtn">
                21个活动
                <i className={'iconfont icon-f111'}></i>
              </div>
            </div>
          </section>*/}
        </section>
      </div>
    );
  }
}

export default Allsort;