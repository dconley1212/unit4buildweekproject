import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import UploadImage from "./UploadImage";

const StyledCard = styled.div`
  background: white;
  padding: 1rem;
  border: none;
  box-shadow: 0 2px 5px 0;
`;
const StyledCardHeader = styled.div`
  font-size: 1.2rem;
  font-family: "Oxygen", sans-serif;
  margin-bottom: 0.25rem;
`;

const StyledCardImage = styled.img`
  display: block;
  max-height: 200px;
  width: 100%;
  aspect-ratio: 9 / 16;
  object-fit: cover;
  object-position: center;
`;

const StyledCardBody = styled.div`
  font-size: 1rem;
`;

const StyledCardFooter = styled.div`
  margin-top: 1rem;
`;
const StyledEditButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 0.5em 0.75em;
  border-radius: 0.4em;
  cursor: pointer;
  margin-right: 0.25em;
  &:hover {
    background-color: silver;
    color: black;
    transition: 0.2s ease-in-out;
  }
`;

const StyledDeleteButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 0.5em 0.75em;
  border-radius: 0.4em;
  cursor: pointer;
  margin-left: 0.25em;
  &:hover {
    background-color: silver;
    color: black;
    transition: 0.2s ease-in-out;
  }
`;

const PlantCard = (props) => {
  const { plant } = props;
  const { deletePlantCard } = props;

  const [urlString, setUrlString] = useState("");

  const { push } = useHistory();

  const user_id = localStorage.getItem("user_id");

  const handleClick = () => {
    push(`/update/${user_id}/${plant.plant_id}`);
  };

  const handleDelete = (plant) => {
    deletePlantCard(plant);
  };

  return (
    <StyledCard>
      <StyledCardHeader className="card_body">
        <h2 className="card_title">{plant.nickname}</h2>
        {/* <StyledCardImage
          alt="jade plant"
          src="https://source.unsplash.com/nKyN0Lfy-1w"
        ></StyledCardImage> */}
        <UploadImage />
      </StyledCardHeader>
      <StyledCardBody>
        <p className="card_description">{`The species:${plant.species}, needs ${plant.h20_frequency}`}</p>
      </StyledCardBody>
      <StyledCardFooter>
        <StyledEditButton onClick={handleClick}>
          Edit Plant Details
        </StyledEditButton>
        <StyledDeleteButton onClick={() => handleDelete(plant)}>
          Delete Plant
        </StyledDeleteButton>
      </StyledCardFooter>
    </StyledCard>
  );
};

export default PlantCard;
