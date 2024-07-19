import style from './PageNotFound.module.scss';
import Header from '../../components/Header/Header';

const PageNotFound = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <h1 className={style.text}>
          404 <br /> Page Not Found
        </h1>
      </div>
    </>
  );
};

export default PageNotFound;
