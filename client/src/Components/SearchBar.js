import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    props.search(searchItem);
  };

  return (
    <div>
      <form>
        <label htmlFor="search-bar">
          <input
            type="search"
            placeholder="Search plant by name"
            value={searchItem}
            onChange={handleSearch}
          />
        </label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
