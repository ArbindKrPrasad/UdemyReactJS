import './NameEmptyError.css';
const NameEmptyError = () => {
  return (
    <div className='name-empty'>
      <h2>Invalid Input</h2>
      <p>Please enter a valid name and age (Non-empty values)</p>
      <div className='okay-button'><button>Okay</button></div>
    </div>
  );
};

export default NameEmptyError;
