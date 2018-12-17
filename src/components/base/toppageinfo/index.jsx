import React, {Component} from 'react';

import Back from '../back/index'
import './index.scss'

class TopPageInfo extends Component {
  render() {
    return (
      <header className={'md_header'}>
        {/* 顶部导航信息 */}
        <Back />
        <h2 className={'title'}>{this.props.title}</h2>
      </header>
    )
  }
}

export default TopPageInfo;