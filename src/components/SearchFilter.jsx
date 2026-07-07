const SearchFilter = ({
  search,
  setSearch,
}) => {
  return (
    <div className="filter-box">

      <input
        type="text"
        placeholder="Search Food"

        value={search}

        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

    </div>
  );
};

export default SearchFilter;