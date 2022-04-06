import React from "react";
import styled from "styled-components";

// need to figure out how to make the shadow around card and bring in the width of the card
// maybe through the grid styling or through my own custom way. Also look into hover effect
// for the button.

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

const StyledCardBody = styled.div`
  font-size: 0.9rem;
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

  return (
    <StyledCard>
      <StyledCardHeader className="card_body">
        <h2 className="card_title">{plant.nickname}</h2>
      </StyledCardHeader>
      <StyledCardBody>
        <p className="card_description">{`The species:${plant.species}, needs ${plant.h20_frequency}`}</p>
      </StyledCardBody>
      <StyledCardFooter>
        <StyledEditButton>Edit Plant Details</StyledEditButton>
        <StyledDeleteButton>Delete Plant</StyledDeleteButton>
      </StyledCardFooter>
    </StyledCard>
  );
};

export default PlantCard;
