import Home from "../components/home";
import Search from "../components/search";
import Find from "../components/find";
import OrderForm from "../components/orderform";
import My from "../components/my";
import MenuDetail from "../components/menudetail";
import NotFind from "../components/notfind";
import Shop from "../components/shop";
import PromotionSub from "../components/promotionsub";


const routers = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/find',
    component: Find
  },
  {
    path: '/orderform',
    component: OrderForm
  },
  {
    path: '/my',
    component: My
  },
  {
    // 进入菜单内页
    path: '/api/category/list:id',
    component: MenuDetail
  },
  {
    // 商家内页
    path: '/api/detail/:id',
    component: Shop
  },
  {
    // 轮播图内页
    path: '/api/promotionsub',
    component: PromotionSub
  },
  {
    path: '*',
    component: NotFind
  }
];


export default routers;