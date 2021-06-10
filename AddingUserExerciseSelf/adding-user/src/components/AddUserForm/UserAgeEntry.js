import "./UserAgeEntry.css";
const UserAgeEntry = (props) => {
  const onAgeChangeHandler = (event) => {
    props.setAge(event.target.value);
  };
  return (
    <div className="user-age">
      <p>Age (in years)</p>
      <input onChange={onAgeChangeHandler} type="number"></input>
    </div>
  );
};

export default UserAgeEntry;
