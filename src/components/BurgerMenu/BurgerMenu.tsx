import { Link, useNavigate } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import logoIcon from '../../image/Header/logo.svg';
import closeIcon from '../../image/Header/close.svg';
import favouritesIcon from '../../image/Header/favourites.svg';
import shopppingIcon from '../../image/Header/shopping.svg';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';

const BurgerMenu = () => {
  const navigate = useNavigate();
  const { counterFavourites, counterCart } = useContext(AppContext);

  return (
    <>
      <div className={styles.burgerMenuOverlay}>
        <div className={styles.burgerMenuContent}>
          <div className={styles.burgerMenuTop}>
            <Link className={styles.logo} to={'/'}>
              <img src={logoIcon} alt="logo" />
            </Link>
            <button
              className={styles.closeButton}
              onClick={() => navigate('/')}
            >
              <img src={closeIcon} alt="close" />
            </button>
          </div>
          <div className={styles.burgerMenuWrap}>
            <nav className={styles.burgerMenuNav}>
              <ul className={styles.burgerMenuList}>
                <li className={styles.burgerMenuItem}>
                  <Link className={styles.burgerMenuLink} to={'/'}>
                    HOME
                  </Link>
                </li>
                <li className={styles.burgerMenuItem}>
                  <Link className={styles.burgerMenuLink} to={'/phones'}>
                    PHONES
                  </Link>
                </li>
                <li className={styles.burgerMenuItem}>
                  <Link className={styles.burgerMenuLink} to={'/tablets'}>
                    TABLETS
                  </Link>
                </li>
                <li className={styles.burgerMenuItem}>
                  <Link className={styles.burgerMenuLink} to={'/accessories'}>
                    ACCESSORIES
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles.burgerMenuBottom}>
              <Link
                className={`${styles.burgerMenuBottomLink} ${styles.burgerMenuBottomLinkFavourites}`}
                to={'/favourites'}
              >
                <img
                  className={styles.burgerMenuImg}
                  src={favouritesIcon}
                  alt="favourites"
                />
                {counterFavourites > 0 && (
                  <div className={styles.counter}>{counterFavourites}</div>
                )}
              </Link>
              <Link className={styles.burgerMenuBottomLink} to={'/cart'}>
                <img
                  className={styles.burgerMenuImg}
                  src={shopppingIcon}
                  alt="cart"
                />
                {counterCart > 0 && (
                  <div className={styles.counter}>{counterCart}</div>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
