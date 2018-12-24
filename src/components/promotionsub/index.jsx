import React, {Component} from 'react';
import './index.scss'
import Axios from 'axios'
import Config from '../../config/config'

const url = require('url');

class PromotionSub extends Component {
  state = {
    img: []
  };
  
  componentDidMount() {
    let {url} = Config;
    Axios.get(`${url}/api/promotionSub`)
      .then(res => {
        console.log(res)
        this.setState({
          img: res.data.data
        })
      })
      .catch(err =>{
        console.log('内页图片请求失败');
        console.log(err);
      })
  }
  
  render() {
    let query = url.parse(this.props.location.search, true).query;
    console.log(query);
    let search = query.search;
    
    return (
      <div className={'banner_sub'}>
        {
          this.state.img.length>0 && (
            <img src={this.state.img[search].img} alt=""/>
          )
        }
      </div>
    );
  }
}

export default PromotionSub;