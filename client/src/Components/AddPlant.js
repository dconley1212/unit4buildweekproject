import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import AddPlantFormSchema from "../validations/AddPlantFormSchema";
import * as Yup from "yup";

const StyledFormContainer = styled.div`
  height: 100%;
`;

const StyledForm = styled.form`
  background: #fffff0;
  border: 1px solid #dedede;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 8rem auto;
  max-width: 40%;
  padding: 1.5rem 1.5rem;
`;

const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 1.5em;
  box-sizing: border-box;
  padding: 0.7rem;
  width: 100%;
  margin-top: 0.5rem;
`;
const StyledLabel = styled.label`
  color: black;
  display: block;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  width: 80%;
`;

const StyledButton = styled.button`
  padding: 1em 2em;
  border-radius: 1em;
  width: 40%;
  margin: 1em;
  color: black;
  background: #8fbc8f;
  font-size: 1em;
`;

const StyledErrors = styled.p`
  display: flex;
  flex-direction: column;
  margin: 0.6rem 0rem;
  font-size: 0.9rem;
  color: #dc143c;
`;

const AddPlant = () => {
  const user_id = localStorage.getItem("user_id");
  const { push } = useHistory();
  const [newPlant, setNewPlant] = useState({
    nickname: "",
    species: "",
    h20_frequency: "",
    user_id: user_id,
  });

  const [inputError, setInputError] = useState({
    nickname: "",
    species: "",
    h20_frequency: "",
  });

  const validate = (name, value) => {
    Yup.reach(AddPlantFormSchema, name)
      .validate(value)
      .then(() => {
        setInputError({
          ...inputError,
          [name]: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setInputError({
          ...inputError,
          [name]: err.errors[0],
        });
      });
  };

  const handleChanges = (e) => {
    validate(e.target.name, e.target.value);
    setNewPlant({
      ...newPlant,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post(`/plants/${user_id}`, newPlant)
      .then((res) => {
        console.log(res);
        push("/dashboard");
      })
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
            <StyledErrors>{inputError.nickname}</StyledErrors>
          </StyledLabel>
          <StyledLabel>
            Species:
            <StyledInput
              type="text"
              name="species"
              value={newPlant.species}
              onChange={handleChanges}
            />
            <StyledErrors>{inputError.species}</StyledErrors>
          </StyledLabel>
          <StyledLabel>
            h20 Frequency:
            <StyledInput
              type="text"
              name="h20_frequency"
              value={newPlant.h20_frequency}
              onChange={handleChanges}
            />
            <StyledErrors>{inputError.h20_frequency}</StyledErrors>
          </StyledLabel>
          <StyledButton>Add Plant</StyledButton>
        </StyledForm>
      </StyledFormContainer>
    </div>
  );
};

export default AddPlant;
