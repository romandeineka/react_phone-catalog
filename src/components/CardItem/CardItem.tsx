import styles from './CardItem.module.scss';
import closeIcon from '../../image/Icon/close.svg';
import minusIcon from '../../image/Cart/minus.svg';
import plusIcon from '../../image/Cart/plus.svg';
import { Product } from '../../types/Product';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';

type Props = {
  product: Product;
};

const CardItem = ({ product }: Props) => {
  const { cart, removeFromCart, updateQuantity } = useContext(AppContext);

  const cartItem = cart.find(item => item.product.id === product.id);

  const handleDecrease = () => {
    if (cartItem) {
      if (cartItem.quantity > 1) {
        updateQuantity(product.id, cartItem.quantity - 1);
      } else {
        removeFromCart(product.id);
      }
    }
  };

  const handleIncrease = () => {
    if (cartItem) {
      updateQuantity(product.id, cartItem.quantity + 1);
    }
  };

  return (
    <div className={styles.cardItem}>
      <div className={styles.cardItemWrapTop}>
        <button
          onClick={() => removeFromCart(product.id)}
          className={styles.cardItemClose}
        >
          <img src={closeIcon} alt="remove" />
        </button>
        <img
          className={styles.cardItemImg}
          src={product.images[0]}
          alt="product"
        />
        <p className={styles.cardItemTitle}>{product.name}</p>
      </div>
      <div className={styles.cardItemWrapBottom}>
        <div className={styles.cardItemQuantity}>
          <button onClick={handleDecrease} className={styles.cardItemButton}>
            <img src={minusIcon} alt="minus" />
          </button>
          <span>{cartItem?.quantity}</span>
          <button onClick={handleIncrease} className={styles.cardItemButton}>
            <img src={plusIcon} alt="plus" />
          </button>
        </div>
        <h3
          className={styles.cardItemPrice}
        >{`$${product.priceDiscount * cartItem!.quantity}`}</h3>
      </div>
    </div>
  );
};

export default CardItem;
