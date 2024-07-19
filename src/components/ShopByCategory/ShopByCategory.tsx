import styles from './ShopByCategory.module.scss';
import { Link } from 'react-router-dom';
import phonesPicture from '../../image/ShopByCategory/phones.png';
import tabletsPicture from '../../image/ShopByCategory/tablets.png';
import accessoriesPicture from '../../image/ShopByCategory/accessories.png';

const ShopByCategory = () => {
  return (
    <div className={styles.category}>
      <h2 className={styles.categoryTitle}>Shop by category</h2>
      <div className={styles.categoryWrap}>
        <Link className={styles.categoryLink} to={'/phones'}>
          <img
            className={styles.categoryImg}
            src={phonesPicture}
            alt="Phones"
          />
          <h4 className={styles.categoryItem}>Mobile phones</h4>
          <p className={styles.categoryQuantity}>95 models</p>
        </Link>
        <Link className={styles.categoryLink} to={'/tablets'}>
          <img
            className={styles.categoryImg}
            src={tabletsPicture}
            alt="Tablets"
          />
          <h4 className={styles.categoryItem}>Tablets</h4>
          <p className={styles.categoryQuantity}>24 models</p>
        </Link>
        <Link className={styles.categoryLink} to={'/accessories'}>
          <img
            className={styles.categoryImg}
            src={accessoriesPicture}
            alt="Accessories"
          />
          <h4 className={styles.categoryItem}>Accessories</h4>
          <p className={styles.categoryQuantity}>100 models</p>
        </Link>
      </div>
    </div>
  );
};

export default ShopByCategory;
