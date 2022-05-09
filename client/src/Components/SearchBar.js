import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  position: relative;
  left: 40px;
  border: 1px solid #dedede;
  border-radius: 20px;
`;

const StyledSearch = styled.input`
  padding: 15px 100px;
  border-radius: 10px;
`;

const SearchBar = (props) => {
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    props.search(searchItem);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.search(searchItem);
  };

  return (
    <div>
      <StyledForm>
        <label htmlFor="search-bar">
          <StyledSearch
            type="search"
            placeholder="Search plant by name"
            value={searchItem}
            onChange={handleSearch}
          />
        </label>
        <button onClick={handleClick}>Search</button>
      </StyledForm>
    </div>
  );
};

export default SearchBar;
