import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  position: relative;
  left: 40px;
  width: 50%;
  border-radius: 20px;
`;

const StyledSearch = styled.input`
  padding: 15px 100px;
  border-radius: 10px;
`;

const StyledSearchButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 0.3em;
  margin-left: 0.5rem;
  padding: 10px 60px;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: black;
    transition: 0.2s ease-in-out;
    color: white;
  }
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
