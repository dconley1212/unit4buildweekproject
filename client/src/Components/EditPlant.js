import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

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

  const handleChanges = (e) => {
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
