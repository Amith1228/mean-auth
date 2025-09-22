import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Please login to see profile</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.fullName}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Country: {user.country}</p>
      <p>State: {user.state}</p>
      <p>City: {user.city}</p>
      <p>DOB: {user.dob}</p>
      <p>Interests: {user.interests?.join(", ")}</p>
    </div>
  );
};

export default Profile;
