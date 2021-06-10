import React from "react";
import './UserDetailsHolder.css';
const UserDetailsHolder = (props) => {
  return (
    <div className='user-details-holder'>
      {`${props.name} (${props.age} years old)`}
    </div>
  );
};

export default UserDetailsHolder;
