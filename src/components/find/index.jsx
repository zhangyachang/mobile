import React, {Component} from 'react';

import TopPageInfo  from "../base/toppageinfo";

import FootNav from '../home/components/footnav'

class Find extends Component {
  render() {
    return (
      <div>
        <TopPageInfo
          title={'发现'}
        />

        {/* 底部导航 */}
        <FootNav></FootNav>
      </div>
    );
  }
}

export default Find;