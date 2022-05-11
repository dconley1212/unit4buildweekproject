import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import AddPlantFormSchema from "../validations/AddPlantFormSchema";
import * as Yup from "yup";
import styled from "styled-components";

const StyledEditContainer = styled.div`
  padding: 200px;
`;

const StyledEditForm = styled.form`
  background: #fffff0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #dedede;
  border-radius: 20px;
  margin: 0 auto;
  padding: 40px 50px;
  max-width: 700px;
`;

const StyledEditLabel = styled.label`
  margin-bottom: 1.5rem;
  width: 80%;
  display: block;
  color: black;
`;

const StyledEditInput = styled.input`
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5rem;
`;

const StyledEditButton = styled.button`
  border: 1px solid black;
  border-radius: 15px;
  padding: 1em 2em;
  background: #8fbc8f;
  font-size: 1em;
  color: black;
  width: 40%;
`;

const StyledEditErrors = styled.p`
  color: #dc143c;
  font-size: 14px;
  margin-bottom: 0;
`;

const EditPlant = () => {
  const user_id = localStorage.getItem("user_id");
  const { plant_id } = useParams();
  const { push } = useHistory();
  const [editedPlant, setEditedPlant] = useState({
    nickname: "",
    species: "",
    h20_frequency: "",
    user_id: user_id,
  });

  const [editErrors, setEditErrors] = useState({
    nickname: "",
    species: "",
    h20_frequency: "",
  });

  useEffect(() => {
    axiosWithAuth()
      .get(`/plants/${user_id}/${plant_id}`)
      .then((res) => {
        setEditedPlant(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const validate = (name, value) => {
    Yup.reach(AddPlantFormSchema, name)
      .validate(value)
      .then(() => {
        setEditErrors({
          ...editErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setEditErrors({
          ...editErrors,
          [name]: err.errors[0],
        });
      });
  };

  const handleChanges = (e) => {
    validate(e.target.name, e.target.value);
    e.preventDefault();
    setEditedPlant({
      ...editedPlant,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/plants/${user_id}/${plant_id}`, editedPlant)
      .then((resp) => {
        console.log(resp);
        push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledEditContainer>
      <StyledEditForm onSubmit={handleSubmit}>
        <StyledEditLabel>
          Nickname:
          <StyledEditInput
            type="text"
            name="nickname"
            value={editedPlant.nickname}
            onChange={handleChanges}
          />
          <StyledEditErrors>{editErrors.nickname}</StyledEditErrors>
        </StyledEditLabel>
        <StyledEditLabel>
          Species:
          <StyledEditInput
            type="text"
            name="species"
            value={editedPlant.species}
            onChange={handleChanges}
          />
          <StyledEditErrors>{editErrors.species}</StyledEditErrors>
        </StyledEditLabel>
        <StyledEditLabel>
          h20 Frequency:
          <StyledEditInput
            type="text"
            name="h20_frequency"
            value={editedPlant.h20_frequency}
            onChange={handleChanges}
          />
          <StyledEditErrors>{editErrors.h20_frequency}</StyledEditErrors>
        </StyledEditLabel>
        <StyledEditButton>Submit</StyledEditButton>
      </StyledEditForm>
    </StyledEditContainer>
  );
};

export default EditPlant;
