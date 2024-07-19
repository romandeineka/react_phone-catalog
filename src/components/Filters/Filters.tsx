import styles from './Filters.module.scss';

type Props = {
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
};

const Filters = ({
  itemsPerPage,
  setItemsPerPage,
  sortOrder,
  setSortOrder,
}: Props) => {
  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const value =
      event.target.value === 'all'
        ? Infinity
        : parseInt(event.target.value, 10);

    setItemsPerPage(value);
  };

  const handleSortOrderChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSortOrder(event.target.value);
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filtersItem}>
        <label htmlFor="sort" className={styles.filtersTitle}>
          Sort by
        </label>
        <select
          onChange={handleSortOrderChange}
          value={sortOrder}
          className={styles.filtersSelectSort}
          name="sort"
          id="sort"
        >
          <option value="newest">Newest</option>
          <option value="latest">Latest</option>
        </select>
      </div>
      <div className={styles.filtersItem}>
        <label htmlFor="items" className={styles.filtersTitle}>
          Items on page
        </label>
        <select
          className={styles.filtersSelectItems}
          name="items"
          id="items"
          value={itemsPerPage === Infinity ? 'all' : itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="all">All</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
