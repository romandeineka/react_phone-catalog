import styles from './HomeSlider.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import slider from '../../image/HomeSlider/slider.png';
import sliderMobile from '../../image/HomeSlider/sliderMobile.png';
import './ButtonArrow.scss';

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>
      <div className={styles.wrapSlider}>
        <Slider {...settings}>
          <div className={styles.slider}>
            <img className={styles.sliderImg} src={slider} alt="slider-1"></img>
          </div>
          <div className={styles.slider}>
            <img className={styles.sliderImg} src={slider} alt="slider-2"></img>
          </div>
          <div className={styles.slider}>
            <img className={styles.sliderImg} src={slider} alt="slider-3"></img>
          </div>
        </Slider>
      </div>
      <div className={styles.wrapSliderMobile}>
        <Slider {...settings}>
          <div className={styles.slider}>
            <img
              className={styles.sliderImgMobile}
              src={sliderMobile}
              alt="slider-1"
            ></img>
          </div>
          <div className={styles.slider}>
            <img
              className={styles.sliderImgMobile}
              src={sliderMobile}
              alt="slider-2"
            ></img>
          </div>
          <div className={styles.slider}>
            <img
              className={styles.sliderImgMobile}
              src={sliderMobile}
              alt="slider-3"
            ></img>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlider;
