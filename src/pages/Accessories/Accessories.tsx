import React, { useState } from 'react';
import styles from '../../pages/Phones/Product.module.scss';
import Filters from '../../components/Filters/Filters';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
// import PhoneCard from '../../components/PhoneCard/PhoneCard';
import ToHome from '../../components/ToHome/ToHome';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import { getAccessories } from '../../api/api';
import ProductCard from '../../components/ProductCard/ProductCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Accessories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(Infinity);
  const [sortOrder, setSortOrder] = useState<string>('Newest');
  const { accessories, setAccessories, sortItems } = useContext(AppContext);

  useEffect(() => {
    getAccessories().then(products => {
      setAccessories(products);
    });
  }, [setAccessories]);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };

  const sortedAccessories = sortItems([...accessories], sortOrder);

  const firstIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = currentPage * itemsPerPage;

  const paginatedAccessories =
    itemsPerPage === Infinity
      ? sortedAccessories
      : sortedAccessories.slice(firstIndex, lastIndex);

  return (
    <div className={styles.product}>
      <Header />
      <ToHome title="Accessories" />
      <div className={styles.productContainer}>
        <h1 className={styles.productTitle}>Accessories</h1>
        <p
          className={styles.productQuantity}
        >{`${accessories.length} models`}</p>
        <Filters
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        <div className={styles.productContainerCards}>
          {paginatedAccessories.map(accessori => (
            <React.Fragment key={accessori.id}>
              <ProductCard product={accessori} isDiscount={true} />
            </React.Fragment>
          ))}
        </div>
        {itemsPerPage !== Infinity && (
          <Stack spacing={2} className={styles.pagination}>
            <Pagination
              count={Math.ceil(accessories.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              color="primary"
              sx={{
                '& .Mui-selected': {
                  backgroundColor: 'black',
                  color: 'white',
                },
                '& .MuiPaginationItem-root': {
                  '&.Mui-selected': {
                    backgroundColor: 'black',
                    color: 'white',
                  },
                },
              }}
            />
          </Stack>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Accessories;
