import React from "react";

const PlantCard = (props) => {
  const { plant } = props;

  return (
    <div className="card">
      <div className="card_body">
        <h2 className="card_title">{plant.nickname}</h2>
        <p className="card_description">{`The species:${plant.species}, needs ${plant.h20_frequency}`}</p>
      </div>
      <button>Edit Plant Details</button>
      <button>Delete Plant</button>
    </div>
  );
};

export default PlantCard;
