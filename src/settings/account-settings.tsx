import React from "react";
import Button from "../components/atoms/button";

const accountSettings = ({ username, email, accountDate, profilePicture }) => {
  return (
    <div>
      <div>
        <img src={profilePicture} alt="Profile Picture" className="" />
        <Button>Change Profile Picture</Button>
      </div>
      <div>
        <p>{username}</p>
        <p>{email}</p>
        <p>{accountDate}</p>
      </div>
    </div>
  );
};

export default accountSettings;
