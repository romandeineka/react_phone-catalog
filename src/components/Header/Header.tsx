import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import logoIcon from '../../image/Header/logo.svg';
import favouritesIcon from '../../image/Header/favourites.svg';
import shopppingIcon from '../../image/Header/shopping.svg';
import menuIcon from '../../image/Header/menu.svg';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    counterFavourites,
    setCounterFavourites,
    favourites,
    counterCart,
    setCounterCart,
    cart,
  } = useContext(AppContext);

  useEffect(() => {
    setCounterFavourites(favourites.length);
    setCounterCart(cart.length);
  }, [favourites, cart]);

  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.headerLogo}>
          <Link to={'/'}>
            <img className={styles.headerLogoImg} src={logoIcon} alt="logo" />
          </Link>
        </div>
        <nav className={styles.headerNav}>
          <ul className={styles.headerNavList}>
            <li className={styles.headerNavItem}>
              <Link
                className={`${styles.headerNavLink} ${location.pathname === '/' && styles.headerNavLinkActive}`}
                to={'/'}
              >
                HOME
              </Link>
            </li>
            <li className={styles.headerNavItem}>
              <Link
                className={`${styles.headerNavLink} ${location.pathname === '/phones' && styles.headerNavLinkActive}`}
                to={'/phones'}
              >
                PHONES
              </Link>
            </li>
            <li className={styles.headerNavItem}>
              <Link
                className={`${styles.headerNavLink} ${location.pathname === '/tablets' && styles.headerNavLinkActive}`}
                to={'/tablets'}
              >
                TABLETS
              </Link>
            </li>
            <li className={styles.headerNavItem}>
              <Link
                className={`${styles.headerNavLink} ${location.pathname === '/accessories' && styles.headerNavLinkActive}`}
                to={'/accessories'}
              >
                ACCESSORIES
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.headerRight}>
        <Link
          className={`${styles.headerLink} ${location.pathname === '/favourites' && styles.headerLinkActive}`}
          to={'/favourites'}
        >
          <img
            className={styles.headerIcon}
            src={favouritesIcon}
            alt="favourites"
          />
          {counterFavourites > 0 && (
            <div className={styles.counter}>{counterFavourites}</div>
          )}
        </Link>
        <Link
          className={`${styles.headerLink} ${location.pathname === '/cart' && styles.headerLinkActive}`}
          to={'/cart'}
        >
          <img className={styles.headerIcon} src={shopppingIcon} alt="cart" />
          {counterCart > 0 && (
            <div className={styles.counter}>{counterCart}</div>
          )}
        </Link>
      </div>
      <button onClick={() => navigate('/menu')} className={styles.headerMenu}>
        <img src={menuIcon} alt="menu" />
      </button>
    </div>
  );
};

export default Header;
