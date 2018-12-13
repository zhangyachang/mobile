import React, {Component} from 'react';

import './index.scss'

class Toplocation extends Component {
  render() {
    return (
      <div className='h_top_location'>
        {/* 顶部定位部分 */}
        <div className={'h_top_content'}>
          <i className={'iconfont icon-mingpianjiaxiaochengxuicon_dizhi'} />
          <span>工业区</span>
          <i className={'iconfont icon-f111'}/>
        </div>
      </div>
    );
  }
}

export default Toplocation;