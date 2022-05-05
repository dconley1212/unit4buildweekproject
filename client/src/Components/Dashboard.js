import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import PlantCard from "./PlantCard";
import styled from "styled-components";
import SearchBar from "./SearchBar";

// need to finish add the jsx for the search bar and test that my helper functions are
// working appropriately to display the plant that was searched for

const StyledTitle = styled.h1`
  color: black;
  display: flex;
  justify-content: center;
  font-family: "Oxygen", sans-serif;
`;

const StyledAddButton = styled.button`
  display: flex;
  background-color: black;
  color: white;
  padding: 0.5em 0.75em;
  border-radius: 0.4em;
  margin: 0.25rem 0rem 1.5rem 1.5rem;
  cursor: pointer;
`;

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  align-items: flex-start;
`;

const Dashboard = () => {
  const [plants, setPlants] = useState([]);
  const user_id = localStorage.getItem("user_id");
  const { push } = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get(`/plants/${user_id}`)
      .then((res) => {
        setPlants(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const search = async (item) => {
    if (!item)
      return axiosWithAuth()
        .get(`/plants/${user_id}`)
        .then((res) => {
          setPlants(res.data);
        })
        .catch((err) => console.log(err));

    const searchedItem = plants.filter((plant) => {
      return plant.nickname.toLowerCase().includes(item.toLowerCase());
    });
    setPlants(searchedItem);
  };

  const handleClick = () => {
    push("/dashboard/add");
  };

  return (
    <div>
      <StyledTitle>My Plants:</StyledTitle>
      <SearchBar search={search}></SearchBar>
      <StyledAddButton onClick={handleClick}>Add a Plant</StyledAddButton>
      <StyledCardContainer>
        {plants.map((plant) => {
          return <PlantCard plant={plant} />;
        })}
      </StyledCardContainer>
    </div>
  );
};

export default Dashboard;
