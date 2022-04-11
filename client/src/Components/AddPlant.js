import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";

const StyledFormContainer = styled.div`
  background: #008080;
  padding: 200px;
`;

const StyledForm = styled.form`
  background: #fffff0;
  border: 1px solid #dedede;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 700px;
  padding: 40px 50px;
`;

const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
`;
const StyledLabel = styled.label`
  color: black;
  display: block;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const StyledButton = styled.button`
  padding: 1em;
  border-radius: 10em;
  margin: 1.5rem;
  color: white;
  background: #008080;
  font-size: 1em;
`;

const AddPlant = () => {
  const user_id = localStorage.getItem("user_id");
  const [newPlant, setNewPlant] = useState({
    nickname: "",
    species: "",
    h20_frequency: "",
    user_id: user_id,
  });

  const handleChanges = (e) => {
    setNewPlant({
      ...newPlant,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post(`/plants/${user_id}`, newPlant)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <StyledFormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>
            Nickname:
            <StyledInput
              type="text"
              name="nickname"
              value={newPlant.nickname}
              onChange={handleChanges}
            />
          </StyledLabel>
          <StyledLabel>
            Species:
            <StyledInput
              type="text"
              name="species"
              value={newPlant.species}
              onChange={handleChanges}
            />
          </StyledLabel>
          <StyledLabel>
            h20 Frequency:
            <StyledInput
              type="text"
              name="h20_frequency"
              value={newPlant.h20_frequency}
              onChange={handleChanges}
            />
          </StyledLabel>
          <StyledButton>Add Plant</StyledButton>
        </StyledForm>
      </StyledFormContainer>
    </div>
  );
};

export default AddPlant;
