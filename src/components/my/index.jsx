import React, {Component} from 'react';

import TopPageInfo  from "../base/toppageinfo";
import FootNav from '../base/footnav'

class My extends Component {
  render() {
    return (
      <div>
        <TopPageInfo
          title={'我的'}
        />
        {/* 底部导航 */}
        <FootNav></FootNav>
      </div>
    );
  }
}

export default My;
