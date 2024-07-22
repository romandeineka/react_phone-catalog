import Phones from '../pages/Phones/Phones';
import Product from '../pages/Product/Product';
import Tablets from '../pages/Tablets/Tablets';
import Favourites from '../pages/Favourites/Favourites';
import Cart from '../pages/Cart/Cart';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
import PageNotCreated from '../pages/PageNotCreated/PageNotCreated';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Accessories from '../pages/Accessories/Accessories';
import Home from '../pages/Home/Home';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/phones',
    element: <Phones />,
  },
  {
    path: '/:category/:productName',
    element: <Product />,
  },
  {
    path: '/tablets',
    element: <Tablets />,
  },
  {
    path: '/accessories',
    element: <Accessories />,
  },
  {
    path: '/favourites',
    element: <Favourites />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/menu',
    element: <BurgerMenu />,
  },
  {
    path: '/contacts',
    element: <PageNotCreated />,
  },
  {
    path: '/rights',
    element: <PageNotCreated />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];
