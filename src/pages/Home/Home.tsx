import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HomeSlider from '../../components/HomeSlider/HomeSlider';

import PhoneSlider from '../../components/PhoneSlider/PhoneSlider';
import ShopByCategory from '../../components/ShopByCategory/ShopByCategory';
import { useProducts } from '../../AppContext';
import { Product } from '../../types/Product';
import { getAccessories, getPhones, getTablets } from '../../api/api';

const Home = () => {
  const { phones, setPhones, setTablets, setAccessories } = useProducts();

  useEffect(() => {
    getPhones().then(products => {
      setPhones(products);
    });
    getTablets().then(products => {
      setTablets(products);
    });
    getAccessories().then(products => {
      setAccessories(products);
    });
  }, [setAccessories, setPhones, setTablets]);

  const sortedByYear = phones.sort(
    (a: Product, b: Product) => b.priceRegular - a.priceRegular,
  );

  const sortedByPrices = phones.sort(
    (a: Product, b: Product) => b.priceRegular - a.priceDiscount,
  );

  return (
    <div>
      <Header />
      <HomeSlider />
      <PhoneSlider
        title="Brand new models"
        phones={sortedByYear}
        isDiscount={false}
      />
      <ShopByCategory />
      <PhoneSlider
        title="Hot prices"
        phones={sortedByPrices}
        isDiscount={true}
      />
      <Footer />
    </div>
  );
};

export default Home;
