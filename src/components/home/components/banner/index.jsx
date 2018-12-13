import React, {Component} from 'react';

import './index.scss'
import {Carousel} from "antd";

class Banner extends Component {
  render() {
    return (
      <div className={'h_banner pd20'}>
        <Carousel autoplay>
          <div>
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
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Banner;