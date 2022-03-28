import React, { useState } from "react";
import { useParams } from "react-router";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddPlant = () => {
  const [newPlant, setNewPlant] = useState({
    nickname: "",
    species: "",
    h20_frequency: "",
  });

  const { user_id } = useParams();

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
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Nickname:
            <input
              type="text"
              name="nickname"
              value={newPlant.nickname}
              onChange={handleChanges}
            />
          </label>
          <label>
            Species:
            <input
              type="text"
              name="species"
              value={newPlant.species}
              onChange={handleChanges}
            />
          </label>
          <label>
            h20 Frequency:
            <input
              type="text"
              name="h20_frequency"
              value={newPlant.h20_frequency}
              onChange={handleChanges}
            />
          </label>
          <button>Add Plant</button>
        </form>
      </div>
    </div>
  );
};

export default AddPlant;
