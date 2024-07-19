import styles from '../../pages/Phones/Product.module.scss';
import Header from '../../components/Header/Header';
import ToHome from '../../components/ToHome/ToHome';
import Filters from '../../components/Filters/Filters';
// import PhoneCard from '../../components/PhoneCard/PhoneCard';
import Footer from '../../components/Footer/Footer';
import { AppContext } from '../../AppContext';
import React, { useContext, useEffect, useState } from 'react';
import { getTablets } from '../../api/api';
import ProductCard from '../../components/ProductCard/ProductCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Tablets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(Infinity);
  const [sortOrder, setSortOrder] = useState<string>('Newest');
  const { tablets, setTablets, sortItems } = useContext(AppContext);

  useEffect(() => {
    getTablets().then(products => {
      setTablets(products);
    });
  }, [setTablets]);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };

  const sortedTablets = sortItems([...tablets], sortOrder);

  const firstIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = currentPage * itemsPerPage;

  const paginatedTablets =
    itemsPerPage === Infinity
      ? sortedTablets
      : sortedTablets.slice(firstIndex, lastIndex);

  return (
    <div className={styles.product}>
      <Header />
      <ToHome title="Tablets" />
      <div className={styles.productContainer}>
        <h1 className={styles.productTitle}>Tablets</h1>
        <p className={styles.productQuantity}>{`${tablets.length} models`}</p>
        <Filters
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        <div className={styles.productContainerCards}>
          {paginatedTablets.map(tablet => (
            <React.Fragment key={tablet.id}>
              <ProductCard product={tablet} isDiscount={true} />
            </React.Fragment>
          ))}
        </div>
        {itemsPerPage !== Infinity && (
          <Stack spacing={2} className={styles.pagination}>
            <Pagination
              count={Math.ceil(tablets.length / itemsPerPage)}
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

export default Tablets;
