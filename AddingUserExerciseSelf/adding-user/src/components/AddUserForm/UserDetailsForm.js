import React, { useState } from "react";
import "./UserDetailsForm.css";
import UserAgeEntry from "./UserAgeEntry";
import UserNameEntry from "./UserNameEntry";
import AddUserButton from "./AddUserButton";
const UserDetailsForm = (props) => {
  const [username, setUserName] = useState("");
  const [userage, setUserAge] = useState("");
  const setUserNameHandler = (enteredName) => {
    setUserName(enteredName);
  };
  const setUserAgeHandler = (enteredAge) => {
    setUserAge(enteredAge);
  };

  const setUserDetailHandler = () => {
    const detail = {
      id: Math.random().toString(),
      name: username,
      age: userage,
    };
    console.log(username);
    console.log(userage);
    props.onUserDetailsChange(detail);
  };

  return (
    <div className="user-details">
      <UserNameEntry setName={setUserNameHandler} />
      <UserAgeEntry setAge={setUserAgeHandler} />
      <AddUserButton setUserDetail={setUserDetailHandler} />
    </div>
  );
};

export default UserDetailsForm;
