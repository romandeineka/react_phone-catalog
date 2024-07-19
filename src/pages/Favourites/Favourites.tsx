import styles from '../../pages/Phones/Product.module.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
// import PhoneCard from '../../components/PhoneCard/PhoneCard';
import ToHome from '../../components/ToHome/ToHome';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import ProductCard from '../../components/ProductCard/ProductCard';

const Favourites = () => {
  const { favourites } = useContext(AppContext);

  return (
    <div className={styles.product}>
      <Header />
      <ToHome title="Favourites" />
      {favourites.length < 1 ? (
        <div
          style={{
            textAlign: 'center',
            fontSize: '30px',
            color: 'gray',
          }}
        >
          Oops! It&apos;s still empty here
        </div>
      ) : (
        <>
          <div className={styles.productContainer}>
            <h1 className={styles.productTitle}>Favourites</h1>
            <p
              className={styles.productQuantity}
            >{`${favourites.length} items`}</p>
            <div className={styles.productContainerCards}>
              {favourites.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isDiscount={true}
                />
              ))}
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Favourites;
