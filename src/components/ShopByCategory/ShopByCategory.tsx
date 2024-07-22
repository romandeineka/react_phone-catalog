import styles from './ShopByCategory.module.scss';
import { Link } from 'react-router-dom';
import phonesPicture from '../../image/ShopByCategory/phones.png';
import tabletsPicture from '../../image/ShopByCategory/tablets.png';
import accessoriesPicture from '../../image/ShopByCategory/accessories.png';
import { useProducts } from '../../AppContext';

interface AccessoryData {
  to: string;
  imgSrc: string;
  title: string;
  quantity: string;
}

const ShopByCategory = () => {
  const { phones, tablets, accessories } = useProducts();
  const accessoriesData: AccessoryData[] = [
    {
      to: '/phones',
      imgSrc: phonesPicture,
      title: 'Mobile phones',
      quantity: `${phones.length} models`,
    },
    {
      to: '/tablets',
      imgSrc: tabletsPicture,
      title: 'Tablets',
      quantity: `${tablets.length} models`,
    },
    {
      to: '/accessories',
      imgSrc: accessoriesPicture,
      title: 'Accessories',
      quantity: `${accessories.length} models`,
    },
  ];

  const AccessoryCard = ({ to, imgSrc, title, quantity }: AccessoryData) => (
    <Link className={styles.categoryLink} to={to}>
      <img className={styles.categoryImg} src={imgSrc} alt={title} />
      <h4 className={styles.categoryItem}>{title}</h4>
      <p className={styles.categoryQuantity}>{quantity}</p>
    </Link>
  );

  return (
    <div className={styles.category}>
      <h2 className={styles.categoryTitle}>Shop by category</h2>
      <div className={styles.categoryWrap}>
        {accessoriesData.map(accessory => (
          <AccessoryCard key={accessory.to} {...accessory} />
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
