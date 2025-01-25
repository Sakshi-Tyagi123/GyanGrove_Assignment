import React from 'react';

const FilterSort = ({ filter, setFilter, sortOrder, handleSort }) => {
  return (
    <div className="filter-sort">
      <input
        type="text"
        placeholder="Filter by category"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button onClick={handleSort}>Sort by Quantity ({sortOrder})</button>
    </div>
  );
};

export default FilterSort;
