import React, { useState } from "react";
import UserDetailsForm from "./AddUserForm/UserDetailsForm";
import UserContainer from "./ViewUser/UserContainer";
import NameEmptyError from "./ErrorView/NameEmptyError";
import AgeError from "./ErrorView/AgeError";
import "./Container.css";

const Container = () => {
  const details = [
    {
      id: 1,
      name: "Arbind",
      age: 21,
    },
  ];
  const [userDetails, setUserDetails] = useState(details);
  const onUserDetailsChangeHandler = (detail) => {
    setUserDetails([...userDetails, detail]);
  };

  return (
    <div>
      <div className="container">
        <UserDetailsForm onUserDetailsChange={onUserDetailsChangeHandler} />
        <UserContainer userDetails={userDetails} />

        {/* <NameEmptyError/>
      <AgeError/> */}
      </div>
      <div className='name-empty'>
        <NameEmptyError />
      </div>
    </div>
  );
};

export default Container;
