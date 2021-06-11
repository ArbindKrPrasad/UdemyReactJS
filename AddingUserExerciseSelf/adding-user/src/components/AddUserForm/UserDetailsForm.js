import React, { useState } from "react";
import "./UserDetailsForm.css";
import UserAgeEntry from "./UserAgeEntry";
import UserNameEntry from "./UserNameEntry";
import AddUserButton from "./AddUserButton";
const UserDetailsForm = (props) => {
  const [isUserNameEmpty, setUserNameEmptyStatus] = useState(true);
  const [isUserAgeEmpty, setUserAgeEmptyStatus] = useState(true);
  const [username, setUserName] = useState("");
  const [userage, setUserAge] = useState("");
  const setUserNameHandler = (enteredName) => {
    setUserName(enteredName);
    enteredName == ""
      ? setUserNameEmptyStatus(true)
      : setUserNameEmptyStatus(false);
  };
  const setUserAgeHandler = (enteredAge) => {
    setUserAge(enteredAge);
    enteredAge == ""
      ? setUserAgeEmptyStatus(true)
      : setUserAgeEmptyStatus(false);
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

//   isUserNameEmpty && return()

  return (
    <div className="user-details">
      <UserNameEntry setName={setUserNameHandler} />
      <UserAgeEntry setAge={setUserAgeHandler} />
      <AddUserButton setUserDetail={setUserDetailHandler} />
    </div>
  );
};

export default UserDetailsForm;
