import React, { useState } from "react";

const EditPlant = () => {
  const user_id = localStorage.getItem("user_id");
  const [editedPlant, setEditedPlant] = useState({
    nickname: "",
    species: "",
    h20_frequency: "",
    user_id: user_id,
  });

  const handleChanges = (e) => {};

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
