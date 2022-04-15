import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";

//need to create the get by id endpoint on the backend in order to hit the endpoint for
// the useEffect hook to populate the forms and then you can hit the put endpoint to
//update the plant info when the click submit

const EditPlant = () => {
  const user_id = localStorage.getItem("user_id");
  const { plant_id } = useParams();
  const [editedPlant, setEditedPlant] = useState({
    nickname: "",
    species: "",
    h20_frequency: "",
    user_id: user_id,
  });

  useEffect(() => {
    axiosWithAuth()
      .get(`/plants/${user_id}/${plant_id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleChanges = (e) => {
    e.preventDefault();
    setEditedPlant({
      ...editedPlant,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nickname:
          <input
            type="text"
            name="nickname"
            value={editedPlant.nickname}
            onChange={handleChanges}
          />
        </label>
        <label>
          Species:
          <input
            type="text"
            name="species"
            value={editedPlant.species}
            onChange={handleChanges}
          />
        </label>
        <label>
          h20 Frequency:
          <input
            type="text"
            name="h20_frequency"
            value={editedPlant.h20_frequency}
            onChange={handleChanges}
          />
        </label>
        <button>Edit Plant</button>
      </form>
    </div>
  );
};

export default EditPlant;
