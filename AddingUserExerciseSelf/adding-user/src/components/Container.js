import React, { useState } from "react";
import UserDetailsForm from "./AddUserForm/UserDetailsForm";
import UserContainer from "./ViewUser/UserContainer";
import NameEmptyError from './ErrorView/NameEmptyError';
import AgeError from './ErrorView/AgeError'

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
      <UserDetailsForm onUserDetailsChange={onUserDetailsChangeHandler} />
      <UserContainer userDetails = {userDetails}/>
      {/* <NameEmptyError/>
      <AgeError/> */}
    </div>
  );
};

export default Container;
