import { Link } from 'react-router-dom';
import styles from './ToHome.module.scss';
import homeIcon from '../../image/Icon/home.svg';
import arrowRight from '../../image/Icon/arrowRight.svg';

type Props = {
  title: string;
  subTitle?: string;
};

const ToHome = ({ title, subTitle }: Props) => {
  return (
    <div className={styles.toHome}>
      <Link to={'/'}>
        <img src={homeIcon} alt="home" />
      </Link>
      <img src={arrowRight} alt="arrow" />
      <Link to={`/${title}`} className={styles.title}>
        {title}
      </Link>
      {subTitle && (
        <>
          <img src={arrowRight} alt="arrow" />
          <p className={styles.title}>{subTitle}</p>
        </>
      )}
    </div>
  );
};

export default ToHome;
