import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import PlantCard from "./PlantCard";
import styled from "styled-components";
import SearchBar from "./SearchBar";

// added the search functionality, and it is working, but I wish I could get it to
// rerender the plants state after deleting a search without having to press enter

const StyledTitle = styled.h1`
  color: white;
  display: flex;
  justify-content: center;
  font-family: "Oxygen", sans-serif;
`;

const StyledAddButton = styled.button`
  position: relative;
  right: 40px;
  font-size: 1rem;
  background-color: black;
  color: white;
  padding: 0.2em 3em;
  border-radius: 0.8em;
  margin: 0.25rem 0rem 1.5rem 1.5rem;
  cursor: pointer;
  &:hover {
    background: silver;
    color: black;
    transition: 0.2s ease-in-out;
  }
`;

const StyledCardContainer = styled.div`
  display: grid;
  margin: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  align-items: flex-start;
`;

const StyledUpperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Dashboard = () => {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const user_id = localStorage.getItem("user_id");
  const { push } = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get(`/plants/${user_id}`)
      .then((res) => {
        setPlants(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const search = async (item) => {
    const searchedItem = plants.filter((plant) => {
      return plant.nickname.toLowerCase().includes(item.toLowerCase());
    });
    setFilteredPlants(searchedItem);
  };
  const handleClick = () => {
    push("/dashboard/add");
  };

  const deletePlantCard = (specificPlant) => {
    setPlants(
      plants.filter((plant) => plant.plant_id !== specificPlant.plant_id)
    );
    axiosWithAuth()
      .delete(`/plants/${user_id}/${specificPlant.plant_id}`)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <StyledTitle>My Plants</StyledTitle>
      <StyledUpperDiv>
        <SearchBar search={search}></SearchBar>
        <StyledAddButton onClick={handleClick}>Add Plant Card</StyledAddButton>
      </StyledUpperDiv>
      <StyledCardContainer>
        {filteredPlants.length === 0
          ? plants.map((plant) => {
              return (
                <PlantCard plant={plant} deletePlantCard={deletePlantCard} />
              );
            })
          : filteredPlants.map((plant) => {
              return (
                <PlantCard plant={plant} deletePlantCard={deletePlantCard} />
              );
            })}
      </StyledCardContainer>
    </div>
  );
};

export default Dashboard;
