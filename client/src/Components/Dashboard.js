import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const Dashboard = () => {
  const [plants, setPlants] = useState([]);
  const { user_id } = useParams();

  useEffect(() => {
    axiosWithAuth
      .get(`http://localhost:9000/api/plants/${user_id}`)
      .then((res) => setPlants(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Plant List:</h1>
      {plants.map((plant) => {
        return <ul>{plant}</ul>;
      })}
    </div>
  );
};

export default Dashboard;
