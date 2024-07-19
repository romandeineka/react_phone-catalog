import styles from './ProductCard.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import FavouritesButton from '../FavouritesButton/FavouritesButton';
import { Product } from '../../types/Product';

type Props = {
  product: Product;
  isDiscount: boolean;
};

const ProductCard = ({ product, isDiscount }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${product.category}/${product.id}`, { state: { product } });
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productCardLink} onClick={handleNavigate}>
        <img
          className={styles.productCardImg}
          src={product.images[0]}
          alt="phone"
        />
      </div>
      <p className={styles.productCardName} onClick={handleNavigate}>
        {product.name}
      </p>
      <div className={styles.productCardPriceWrap}>
        <h3
          className={styles.productCardPrice}
        >{`$${product.priceDiscount}`}</h3>
        {isDiscount && (
          <h3
            className={styles.productCardPriceOld}
          >{`$${product.priceRegular}`}</h3>
        )}
      </div>
      <hr className={styles.productCardHr} />
      <div className={styles.productCardDescr}>
        <div className={styles.productCardDescrItem}>
          <span className={styles.productCardDescrLabel}>Screen</span>
          <span className={styles.productCardDescrValue}>{product.screen}</span>
        </div>
        <div className={styles.productCardDescrItem}>
          <span className={styles.productCardDescrLabel}>Capacity</span>
          <span className={styles.productCardDescrValue}>
            {product.capacity}
          </span>
        </div>
        <div className={styles.productCardDescrItem}>
          <span className={styles.productCardDescrLabel}>RAM</span>
          <span className={styles.productCardDescrValue}>{product.ram}</span>
        </div>
      </div>
      <div className={styles.productCardButtons}>
        <Button title="Add to cart" product={product} />
        <FavouritesButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
