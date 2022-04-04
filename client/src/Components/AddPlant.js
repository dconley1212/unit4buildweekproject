import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

//I only have 3 inputs currently because I believe that the user_id, required for the backend server,
//has to have it for it to work correctly, but I am trying to figure out if the user_id can be passed
// from the url to the server using react because the backend creates the user_id and the user won't know
// that information.

const AddPlant = () => {
  const [newPlant, setNewPlant] = useState({
    nickname: "",
    species: "",
    h20_frequency: "",
  });

  const user_id = localStorage.getItem("user_id");

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
