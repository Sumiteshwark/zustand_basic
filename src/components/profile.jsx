import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../store/data";

const Profile = () => {
  const { getAge, getName } = useData();
  const navigate = useNavigate();
  return (
    <>
      <div>
        Name is {getName()} and age is {getAge()}
      </div>
      <button onClick={() => navigate("/")}>Home</button>
    </>
  );
};

export default Profile;
