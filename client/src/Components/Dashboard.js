import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import PlantCard from "./PlantCard";
import styled from "styled-components";

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Dashboard = () => {
  const [plants, setPlants] = useState([]);
  const user_id = localStorage.getItem("user_id");
  const { push } = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get(`/plants/${user_id}`)
      .then((res) => setPlants([res.data]))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    push("/dashboard/add");
  };

  return (
    <div>
      <h1>Plant List:</h1>
      <button onClick={handleClick}>Add a Plant</button>
      <StyledCardContainer>
        {plants.map((plant) => {
          return <PlantCard plant={plant} />;
        })}
      </StyledCardContainer>
    </div>
  );
};

export default Dashboard;
