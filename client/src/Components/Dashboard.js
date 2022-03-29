import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import PlantCard from "./PlantCard";

const Dashboard = () => {
  const [plants, setPlants] = useState([]);
  // const { user_id } = useParams();
  const user_id = localStorage.getItem("user_id");
  const { push } = useHistory();

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`/plants/${user_id}`)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // });

  const handleClick = () => {
    push("/dashboard/add");
  };

  return (
    <div>
      <h1>Plant List:</h1>
      {/* {plants.map((plant) => {
        return <PlantCard plant={plant} />;
      })} */}
      <button onClick={handleClick}>Add a Plant</button>
    </div>
  );
};

export default Dashboard;
