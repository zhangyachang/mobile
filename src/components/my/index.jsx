import React, {Component} from 'react';

import TopPageInfo  from "../base/toppageinfo";
import FootNav from '../base/footnav'
import './index.scss'
class My extends Component {
  constructor() {
    super();

    this.name = 'construe里面的自定义属性';

  }
  state = {
    age: '11',
    name: '111'
  };

  goudan = [];


  render() {
    console.log('打印什么东西啊');
    console.log(this);

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
