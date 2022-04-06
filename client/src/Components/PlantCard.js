import React from "react";
import styled from "styled-components";

// left off on figuring out how to place the styledcard footer and was thinking
//about putting it around the buttons

const StyledCard = styled.div`
  background: white;
  padding: 1rem;
  border: 1px;
  border-radius: 0.25rem;
`;
const StyledCardHeader = styled.div`
  font-size: 1.5rem;
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
  border-radius: 0.25em;
  cursor: pointer;
`;

const StyledDeleteButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 0.5em 0.75em;
  border-radius: 0.25em;
  cursor: pointer;
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
      <button>Edit Plant Details</button>
      <button>Delete Plant</button>
    </StyledCard>
  );
};

export default PlantCard;
