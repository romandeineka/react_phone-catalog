import styles from './Cart.module.scss';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import arrowLeft from '../../image/Icon/arrowLeft.svg';
import CardItem from '../../components/CardItem/CardItem';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';

const Cart = () => {
  const navigate = useNavigate();

  const { cart } = useContext(AppContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.product.priceDiscount * item.quantity,
    0,
  );
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={styles.cart}>
      <Header />
      <div className={styles.cartContent}>
        <button className={styles.cartBack} onClick={() => navigate(-1)}>
          <img src={arrowLeft} alt="back" />
          <p className={styles.cartBackTitle}>Back</p>
        </button>
        {cart.length < 1 ? (
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
            <h1 className={styles.cartTitle}>Cart</h1>
            <div className={styles.cartWrap}>
              <div className={styles.cartWrapItems}>
                {cart.map(item => (
                  <CardItem key={item.product.id} product={item.product} />
                ))}
              </div>
              <div className={styles.cartTotal}>
                <h2 className={styles.cartTotalPrice}>{`$${totalPrice}`}</h2>
                <p className={styles.cartTotalQuantity}>
                  Total for {totalQuantity} items
                </p>
                <Button title="Checkout" height="48px" width="85%" />
              </div>
            </div>
          </>
        )}
      </div>
      {cart.length > 0 && <Footer />}
    </div>
  );
};

export default Cart;
