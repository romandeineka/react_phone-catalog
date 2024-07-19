import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Phones from './pages/Phones/Phones';
import Tablets from './pages/Tablets/Tablets';
import Accessories from './pages/Accessories/Accessories';
import Favourites from './pages/Favourites/Favourites';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PageNotCreated from './pages/PageNotCreated/PageNotCreated';

export const App = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/phones" element={<Phones />} />
      <Route path="/:category/:productName" element={<Product />} />
      <Route path="/tablets" element={<Tablets />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/menu" element={<BurgerMenu />} />
      <Route path="/contacts" element={<PageNotCreated />} />
      <Route path="/rights" element={<PageNotCreated />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </>
);
