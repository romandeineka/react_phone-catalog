import styles from './FavouritesButton.module.scss';
import favouritesIcon from '../../image/ProductCard/favourites.svg';
import favouritesSelected from '../../image/ProductCard/favoutitesSelected.svg';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { Product } from '../../types/Product';

type Props = {
  width?: string;
  height?: string;
  product: Product;
};

const FavouritesButton = ({ width, height, product }: Props) => {
  const { favourites, setFavourites } = useContext(AppContext);

  const addToFavourites = (item: Product) => {
    setFavourites(prevFavourites => [...prevFavourites, item]);
  };

  const removeToFavourites = (item: Product) => {
    setFavourites(prevFavourites =>
      prevFavourites.filter(fav => fav.id !== item.id),
    );
  };

  const isFavourites = favourites.some((fav: Product) => fav.id === product.id);

  const handleToggleFavourite = () => {
    if (isFavourites) {
      removeToFavourites(product);
    } else {
      addToFavourites(product);
    }
  };

  return (
    <button
      style={{
        width,
        height,
      }}
      className={styles.favourites}
      onClick={handleToggleFavourite}
    >
      <img
        className={styles.favouritesImg}
        src={isFavourites ? favouritesSelected : favouritesIcon}
        alt="favourites"
      />
    </button>
  );
};

export default FavouritesButton;
