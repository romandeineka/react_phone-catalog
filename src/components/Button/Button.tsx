import { Product } from '../../types/Product';
import styles from './Button.module.scss';
import { useProducts } from '../../AppContext';

type Props = {
  title: string;
  width?: string;
  height?: string;
  product?: Product;
};

const Button = ({ title, width, height, product }: Props) => {
  const { cart, addToCart, removeFromCart } = useProducts();
  const isInCart = cart.some(item => item.product.id === product?.id);

  const handleToggleCart = () => {
    if (isInCart && product) {
      removeFromCart(product.id);
    } else if (product) {
      addToCart(product);
    }
  };

  return (
    <button
      style={{
        width,
        height,
      }}
      className={isInCart ? styles.buttonSelected : styles.button}
      onClick={handleToggleCart}
    >
      {isInCart ? 'Added' : title}
    </button>
  );
};

export default Button;
