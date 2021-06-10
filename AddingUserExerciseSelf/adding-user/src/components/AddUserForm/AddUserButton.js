import "./AddUserButton.css";

const AddUserButton = (props) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.setUserDetail();
  };
  return (
    <div className="add-button">
      <form onSubmit={onSubmitHandler}>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserButton;
