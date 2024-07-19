import styles from '../../pages/Phones/Product.module.scss';
import Header from '../../components/Header/Header';
import ToHome from '../../components/ToHome/ToHome';
import Filters from '../../components/Filters/Filters';
import Footer from '../../components/Footer/Footer';
import { AppContext } from '../../AppContext';
import { useContext, useEffect, useState } from 'react';
import { getPhones } from '../../api/api';
import ProductCard from '../../components/ProductCard/ProductCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Phones = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(Infinity);
  const [sortOrder, setSortOrder] = useState<string>('Newest');
  const { phones, setPhones, sortItems } = useContext(AppContext);

  useEffect(() => {
    getPhones().then(products => {
      setPhones(products);
    });
  }, [setPhones]);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };

  const sortedPhones = sortItems([...phones], sortOrder);

  const firstIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = currentPage * itemsPerPage;

  const paginatedPhones =
    itemsPerPage === Infinity
      ? sortedPhones
      : sortedPhones.slice(firstIndex, lastIndex);

  return (
    <div className={styles.product}>
      <Header />
      <ToHome title="Phones" />
      <div className={styles.productContainer}>
        <h1 className={styles.productTitle}>Mobile phones</h1>
        <p className={styles.productQuantity}>{`${phones.length} models`}</p>
        <Filters
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        <div className={styles.productContainerCards}>
          {paginatedPhones.map(phone => (
            <div key={phone.id}>
              <ProductCard product={phone} isDiscount={true} />
            </div>
          ))}
        </div>
        {itemsPerPage !== Infinity && (
          <Stack spacing={2} className={styles.pagination}>
            <Pagination
              count={Math.ceil(phones.length / itemsPerPage)}
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

export default Phones;
