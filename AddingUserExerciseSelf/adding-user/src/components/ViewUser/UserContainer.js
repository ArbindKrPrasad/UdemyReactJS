import React from "react";
import "./UserContainer.css";
import UserDetailsHolder from "./UserDetailsHolder";

const UserContainer = (props) => {
  return (
    <div className="user-container">
      {props.userDetails.map((userDetail) => (
        <UserDetailsHolder
          key={userDetail.id}
          name={userDetail.name}
          age={userDetail.age}
        />
      ))}
      {/* <UserDetailsHolder details = {userDetails}/> */}
    </div>
  );
};

export default UserContainer;