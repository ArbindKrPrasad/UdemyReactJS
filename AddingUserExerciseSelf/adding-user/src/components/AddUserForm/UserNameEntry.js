import './UserNameEntry.css';
const UserNameEntry = (props) => {
    const onNameChangeHandler = event => {
        props.setName(event.target.value);
    }
    return (
        <div className='user-name'>
            <p>Username</p>
            <input onChange={onNameChangeHandler} type="text"></input>
        </div>
    );
}
export default UserNameEntry;