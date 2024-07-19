import Header from '../../components/Header/Header';
import style from './PageNotCreated.module.scss';

const PageNotCreated = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <h1 className={style.text}>This page is still under development!</h1>
      </div>
    </>
  );
};

export default PageNotCreated;
