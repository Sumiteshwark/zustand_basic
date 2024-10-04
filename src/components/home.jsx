import React from "react";
import { useNavigate } from "react-router-dom";
import {useData} from '../store/data'

const Home = () => {
  const {setAge, getAge, setName, getName } = useData();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello</h1>
      <p>Age: {getAge()}</p>
      <p>Name: {getName()}</p>
      <button onClick={() => setAge(getAge() + 1)}>Update Age</button>
      <button onClick={() => setName("Sumitesh Kumar")}>Update Name</button>
      <button onClick={() => navigate("/profile")}>Profile</button>
    </div>
  );
};

export default Home;