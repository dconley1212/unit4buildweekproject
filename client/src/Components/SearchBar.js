import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  position: relative;
  left: 40px;
  width: 50%;
  border: 1px solid #dedede;
  border-radius: 20px;
`;

const StyledSearch = styled.input`
  padding: 15px 100px;
  border-radius: 10px;
`;

const StyledSearchButton = styled.button`
  display: flex;
  flex-direction: column;
  margin-top: 0.3em;
  margin-left: 0.5rem;
  padding: 10px 60px;
  border-radius: 10px;
  font-size: 1rem;
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
        <StyledSearchButton onClick={handleClick}>Search</StyledSearchButton>
      </StyledForm>
    </div>
  );
};

export default SearchBar;
