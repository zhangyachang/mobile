import Home from "../components/home";
import Search from "../components/search";
import Find from "../components/find";
import OrderForm from "../components/orderform";
import My from "../components/my";
import MenuDetail from "../components/menudetail";
import NotFind from "../components/notfind";
import Shop from "../components/shop";
<<<<<<< HEAD

=======
>>>>>>> bd9f857748dc77d2535582124497470ea5eb8c59

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
    path: '/menudetail/:id',
    component: MenuDetail
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '*',
    component: NotFind
  }


];


export default routers;