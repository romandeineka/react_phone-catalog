import styles from './Product.module.scss';
// import { useLocation } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ToHome from '../../components/ToHome/ToHome';
import arrowLeft from '../../image/Icon/arrowLeft.svg';
import Button from '../../components/Button/Button';
// eslint-disable-next-line max-len
import FavouritesButton from '../../components/FavouritesButton/FavouritesButton';
// import PhoneSlider from '../../components/PhoneSlider/PhoneSlider';
import Footer from '../../components/Footer/Footer';
import { Product as ProductType } from '../../types/Product';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';
import { getAccessories, getPhones, getTablets } from '../../api/api';

const Product = () => {
  const { selectedProduct, setSelectedProduct } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const product: ProductType = location.state?.product;
  const [selectedImage, setSelectedImage] = useState(
    selectedProduct ? selectedProduct.images[0] : '',
  );
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    setSelectedProduct(product);
  }, [product]);

  useEffect(() => {
    if (selectedProduct) {
      setSelectedImage(selectedProduct.images[0]);
    }
  }, [selectedProduct]);

  const handleColorSelection = async (
    color: string,
    category: string,
    name: string,
  ) => {
    let products: ProductType[] = [];

    switch (category) {
      case 'phones':
        products = await getPhones();
        break;
      case 'tablets':
        products = await getTablets();
        break;
      case 'accessories':
        products = await getAccessories();
        break;
      default:
        throw new Error(`Unsupported category: ${category}`);
    }

    // Filter products based on the selected color
    const filteredProduct = products.find(
      prod => prod.color.includes(color) && prod.namespaceId.includes(name),
    );

    if (filteredProduct) {
      setSelectedProduct(filteredProduct);
      setSelectedImage(filteredProduct.images[0]);
      setSelectedColor(color);

      navigate(`/product/${filteredProduct.id}`, {
        state: { product: filteredProduct },
      });
    }
  };

  const handleCapacitySelection = async (
    capacity: string,
    category: string,
    name: string,
  ) => {
    let products: ProductType[] = [];

    switch (category) {
      case 'phones':
        products = await getPhones();
        break;
      case 'tablets':
        products = await getTablets();
        break;
      case 'accessories':
        products = await getAccessories();
        break;
      default:
        throw new Error(`Unsupported category: ${category}`);
    }

    // Filter products based on the selected capacity
    const filteredProduct = products.find(
      prod =>
        prod.capacity.includes(capacity) &&
        prod.color.includes(selectedColor) &&
        prod.namespaceId.includes(name),
    );

    if (filteredProduct) {
      setSelectedProduct(filteredProduct);
      setSelectedImage(filteredProduct.images[0]);

      // Update URL with new product details
      navigate(`/product/${filteredProduct.id}`, {
        state: { product: filteredProduct },
      });
    }
  };

  return (
    <div className={styles.product}>
      <Header />
      <ToHome title={product.category} subTitle={product.name} />
      {selectedProduct ? (
        <div className={styles.productWrap}>
          <button className={styles.productBack} onClick={() => navigate(-1)}>
            <img src={arrowLeft} alt="back" />
            <p className={styles.productBackTitle}>Back</p>
          </button>

          <h2 className={styles.productTitle}>{selectedProduct.name}</h2>
          <div className={styles.productImages}>
            <div className={styles.productWrapImg}>
              <div className={styles.productMiniImg}>
                {selectedProduct.images.map((img, index) => {
                  return (
                    <img
                      key={index}
                      className={`${styles.productImg} ${selectedImage === img ? styles.productSelectedImage : ''}`}
                      src={`/${img}`}
                      alt="image"
                      onClick={() => setSelectedImage(img)}
                    />
                  );
                })}
              </div>
              <img
                className={styles.productMainImg}
                src={`/${selectedImage}`}
                alt="image"
              />
            </div>
            <div className={styles.productShortDescription}>
              <div className={styles.productColorsWrap}>
                <div className={styles.productWrapId}>
                  <p className={styles.productDescrTitle}>Available colors</p>
                  <span className={styles.productId}>ID: 1</span>
                </div>
                <div className={styles.productColors}>
                  {selectedProduct.colorsAvailable.map(color => (
                    <button
                      style={{
                        backgroundColor: color,
                      }}
                      key={color}
                      className={`${styles.productColorsItem} ${selectedProduct.color === color ? styles.productColorsSelected : ''}`}
                      onClick={() =>
                        handleColorSelection(
                          color,
                          product.category,
                          product.namespaceId,
                        )
                      }
                    ></button>
                  ))}
                </div>
              </div>
              <div className={styles.productCapacityWrap}>
                <p className={styles.productDescrTitle}>Select capacity</p>
                <div className={styles.productCapacity}>
                  {selectedProduct.capacityAvailable.map(capacity => (
                    <button
                      key={capacity}
                      className={`${styles.productCapacityItem} ${selectedProduct.capacity === capacity ? styles.productCapacitySelected : ''}`}
                      onClick={() =>
                        handleCapacitySelection(
                          capacity,
                          product.category,
                          product.namespaceId,
                        )
                      }
                    >
                      {capacity}
                    </button>
                  ))}
                </div>
              </div>
              <div className={styles.productPrice}>
                <span
                  className={styles.productPriceNew}
                >{`$${selectedProduct.priceDiscount}`}</span>
                <span
                  className={styles.productPriceOld}
                >{`$${selectedProduct.priceRegular}`}</span>
                <div className={styles.productPriceButtons}>
                  <Button
                    title="Add to cart"
                    width="85%"
                    height="48px"
                    product={product}
                  />
                  <FavouritesButton
                    width="48px"
                    height="48px"
                    product={selectedProduct}
                  />
                </div>
              </div>
              <div className={styles.productChar}>
                <div className={styles.productCharItem}>
                  <span className={styles.productDescrTitle}>Screen</span>
                  <span className={styles.productCharValue}>
                    {selectedProduct.screen}
                  </span>
                </div>
                <div className={styles.productCharItem}>
                  <span className={styles.productDescrTitle}>Resolution</span>
                  <span className={styles.productCharValue}>
                    {selectedProduct.resolution}
                  </span>
                </div>
                <div className={styles.productCharItem}>
                  <span className={styles.productDescrTitle}>Processor</span>
                  <span className={styles.productCharValue}>
                    {selectedProduct.processor}
                  </span>
                </div>
                <div className={styles.productCharItem}>
                  <span className={styles.productDescrTitle}>RAM</span>
                  <span className={styles.productCharValue}>
                    {selectedProduct.ram}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productInfo}>
            <div className={styles.productAbout}>
              <h3 className={styles.productInfoTitle}>About</h3>

              {selectedProduct.description.map(descr => (
                <div key={descr.title} className={styles.productAboutItem}>
                  <h4 className={styles.productAboutTitle}>{descr.title}</h4>
                  <p className={styles.productAboutDescr}>{descr.text}</p>
                </div>
              ))}
            </div>
            <div className={styles.productTechSpecs}>
              <h3 className={styles.productInfoTitle}>Tech specs</h3>
              <div className={styles.productTechSpecsItem}>
                <span className={styles.productTechSpecsTitle}>Screen</span>
                <span className={styles.productTechSpecsValue}>
                  {selectedProduct.screen}
                </span>
              </div>
              <div className={styles.productTechSpecsItem}>
                <span className={styles.productTechSpecsTitle}>Resolution</span>
                <span className={styles.productTechSpecsValue}>
                  {selectedProduct.resolution}
                </span>
              </div>
              <div className={styles.productTechSpecsItem}>
                <span className={styles.productTechSpecsTitle}>Processor</span>
                <span className={styles.productTechSpecsValue}>
                  {selectedProduct.processor}
                </span>
              </div>
              <div className={styles.productTechSpecsItem}>
                <span className={styles.productTechSpecsTitle}>RAM</span>

                <span className={styles.productTechSpecsValue}>
                  {selectedProduct.ram}
                </span>
              </div>
              <div className={styles.productTechSpecsItem}>
                <span className={styles.productTechSpecsTitle}>
                  Built in memory
                </span>
                <span className={styles.productTechSpecsValue}>
                  {selectedProduct.capacity}
                </span>
              </div>
              <div className={styles.productTechSpecsItem}>
                <span className={styles.productTechSpecsTitle}>Camera</span>
                <span className={styles.productTechSpecsValue}>
                  {selectedProduct.camera}
                </span>
              </div>
              <div className={styles.productTechSpecsItem}>
                <span className={styles.productTechSpecsTitle}>Zoom</span>
                <span className={styles.productTechSpecsValue}>
                  {selectedProduct.zoom}
                </span>
              </div>
              <div className={styles.productTechSpecsItem}>
                <span className={styles.productTechSpecsTitle}>Cell</span>
                <span className={styles.productTechSpecsValue}>
                  {selectedProduct.cell.join(', ')}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Product not found</div>
      )}
      {/* <PhoneSlider title="You may also like" /> */}
      <Footer />
    </div>
  );
};

export default Product;
