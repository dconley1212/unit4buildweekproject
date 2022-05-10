import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import AddPlantFormSchema from "../validations/AddPlantFormSchema";
import * as Yup from "yup";
import styled from "styled-components";

const StyledEditContainer = styled.div`
  background: #adff2f;
  margin: 0px;
  padding: 200px;
`;

const StyledEditForm = styled.form`
  background: #fffff0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid #dedede;
  border-radius: 20px;
  padding: 40px 50px;
  max-width: 700px;
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
        <label>
          Nickname:
          <input
            type="text"
            name="nickname"
            value={editedPlant.nickname}
            onChange={handleChanges}
          />
          <p>{editErrors.nickname}</p>
        </label>
        <label>
          Species:
          <input
            type="text"
            name="species"
            value={editedPlant.species}
            onChange={handleChanges}
          />
          <p>{editErrors.species}</p>
        </label>
        <label>
          h20 Frequency:
          <input
            type="text"
            name="h20_frequency"
            value={editedPlant.h20_frequency}
            onChange={handleChanges}
          />
          <p>{editErrors.h20_frequency}</p>
        </label>
        <button>Edit Plant</button>
      </StyledEditForm>
    </StyledEditContainer>
  );
};

export default EditPlant;
