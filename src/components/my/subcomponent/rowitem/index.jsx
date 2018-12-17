import React, {Component} from 'react';

import './index.scss'

class RowItem extends Component {
  render() {
    return (
      <div className={'row_item'}>
        <div>
          <i className={'iconfont icon-mingpianjiaxiaochengxuicon_dizhi'}></i>
          <p>我的地址</p>
          <i className={''}></i>
        </div>

        <p>
          <i className={'iconfont icon-mingpianjiaxiaochengxuicon_dizhi'}></i>

        </p>
      </div>
    );
  }
}

export default RowItem;