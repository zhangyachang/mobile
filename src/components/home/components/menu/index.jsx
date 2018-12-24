import React, {Component} from 'react';
import './index.scss'
import {Carousel} from 'antd'
import Axios from 'axios'
import Config from '../../../../config/config.js'
import {Link} from 'react-router-dom'
class Menu extends Component {
  state = {
    category: [],
    page: 0
  };
  
  // 处理数组以10个为一页
  handlePage = (data, num) => {
    console.log('调用了我呢');
    console.log(data, num);
    let page = Math.ceil(data.length/num);
    let more = data.length%num;
    
    for(let i=0;i<page;i++){
      console.log(this.state.category[i]);
      if(!this.state.category[i]){
        this.state.category[i] = [];
      }
      console.log(this.state.category);
      
      if(i !== page-1){
        for(let j=0;j<num;j++){
          this.state.category[i].push(data[(i+1)*j])
        }
      }else{
        for(let j=0;j<more;j++){
          this.state.category[i].push(data[(i+1)*j])
        }
      }
    }
  };
  
  componentDidMount() {
    let {url} = Config;
    Axios.get(`${url}/api/category`)
      .then(res => {
        console.log('请求成功结果');
        console.log(res);
        
        let data = res.data.data;
        let page = Math.ceil(data.length/10);
        
        
        this.handlePage(data, 10);
        this.setState({
          category: this.state.category,
          page: page
        });
        
      })
      .catch(err => {
        console.log('请求失败');
        console.log(err);
        
      });
    
  }
  
  render() {
    const {category} = this.state;
    console.log('数据是什么样子的');
    console.log(category[1]);
    
    return (
      <div className='h_menu'>
        <Carousel>
          <div className={'h_menu_item'}>
            
            {
              category.length > 0 && category[0].map((item, index) => {
                return (
                  <Link key={index} to={'/api/category/list'+item.id}>
                    <img src={item.img} />
                    <span>{item.title}</span>
                  </Link>
                )
              })
            }
            
          </div>
          <div className={'h_menu_item'}>
            {
              category[1] && category[1].map((item, index) => {
                return (
                  <Link key={index} to={'/api/category/list'+item.id}>
                    <img src={item.img} />
                    <span>{item.title}</span>
                  </Link>
                )
              })
            }
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Menu;