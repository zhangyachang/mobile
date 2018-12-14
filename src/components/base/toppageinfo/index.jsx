import React, {Component} from 'react';

import './index.scss'

class TopPageInfo extends Component {
  render() {
    return (
      <header className={'md_header pd20'}>
        {/* 顶部导航信息 */}
        <i className={'iconfont icon-fanhui2'} />
        <h2 className={'title'}>{this.props.title}</h2>
      </header>
    )
  }
}

export default TopPageInfo;