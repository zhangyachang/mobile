import React, {Component} from 'react';
import {Link} from "react-router-dom";


import Axios from 'axios'
import Config from '../../../../config/config.js'

import './index.scss'
import {Carousel} from "antd";

class Banner extends Component {
  state = {
    banner: []
  };
  
  componentDidMount() {
    let {url} = Config;
    Axios.get(`${url}/api/promotion`)
      .then(res => {
        console.log('轮播图请求部分');
        
        console.log(res.data);
        this.setState({
          banner: res.data
        })
      })
      .catch(err => {
        console.log('Banner参数请求失败');
      })
  }
  
  render() {
    console.log('轮播图');
    console.log(this.state.banner);
    return (
      <div className={'h_banner pd20'}>
        <Carousel autoplay>
          {
            this.state.banner.data && this.state.banner.data.map((item) => {
              return (
                <div key={item.id}>
                  <Link to={`/api/promotionsub?search=${item.id}`}>
                    <img src={item.img} alt=""/>
                  </Link>
                </div>
              )
            })
          }
         {/* <div>
            <a href="/">
              <img src={require('../../../../static/img/banner/1.webp')} alt=""/>
            </a>
          </div>
          <div>
            <a href="/">
              <img src={require('../../../../static/img/banner/2.webp')} alt=""/>
            </a>
          </div>
          <div>
            <a href="/">
              <img src={require('../../../../static/img/banner/3.webp')} alt=""/>
            </a>
          </div>
          <div>
            <a href="/">
              <img src={require('../../../../static/img/banner/4.webp')} alt=""/>
            </a>
          </div>
          <div>
            <a href="/">
              <img src={require('../../../../static/img/banner/5.webp')} alt=""/>
            </a>
          </div>*/}
        </Carousel>
      </div>
    );
  }
}

export default Banner;