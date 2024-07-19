import Slider from 'react-slick';
import ProductCard from '../ProductCard/ProductCard';
import styles from './PhoneSlider.module.scss';
import { Product } from '../../types/Product';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

type Props = {
  title: string;
  phones: Product[];
  isDiscount: boolean;
};

const SampleNextArrow: React.FC<ArrowProps> = props => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        top: '-50px',
        right: '3.5%',
        height: '0px',
        width: '0px',
        display: 'block',
        border: 'none',
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow: React.FC<ArrowProps> = props => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        top: '-50px',
        left: '92%',
        height: '0px',
        width: '0px',
        display: 'block',
        border: 'none',
      }}
      onClick={onClick}
    />
  );
};

const PhoneSlider = ({ title, phones, isDiscount }: Props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.phoneSlider}>
      <h2 className={styles.phoneSliderTitle}>{title}</h2>
      <div className={`${styles.phoneCarousel} custom-slick-slider`}>
        <Slider {...settings}>
          {phones.map(phone => (
            <div key={phone.id} className={styles.phoneSliderWrap}>
              <ProductCard product={phone} isDiscount={isDiscount} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PhoneSlider;
