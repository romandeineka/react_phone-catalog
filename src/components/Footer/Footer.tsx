import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import logoIcon from '../../image/Header/logo.svg';
import arrow from '../../image/Footer/arrow.svg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.footer}>
      <Link to={'/'}>
        <img className={styles.footerLogo} src={logoIcon} alt="logo" />
      </Link>
      <div className={styles.footerLinks}>
        <a
          target="blank"
          className={styles.footerLinksItem}
          href="https://github.com/romandeineka"
        >
          Github
        </a>
        <Link
          target="blank"
          className={styles.footerLinksItem}
          to={'/contacts'}
        >
          Contacts
        </Link>
        <Link target="blank" className={styles.footerLinksItem} to={'/rights'}>
          rights
        </Link>
      </div>
      <div className={styles.footerToTopContainer}>
        <div className={styles.footerToTop}>
          <p onClick={scrollToTop} className={styles.footerText}>
            Back to top
          </p>
          <button onClick={scrollToTop} className={styles.footerButton}>
            <img src={arrow} alt="Back to top" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
