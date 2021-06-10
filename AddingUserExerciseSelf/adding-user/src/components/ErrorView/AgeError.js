import './AgeError.css';
const AgeError = () => {
  return (
    <div className='name-empty'>
      <h2>Invalid Input</h2>
      <p>Please enter a valid age ( greater than 0 )</p>
      <div className='okay-button'><button>Okay</button></div>
    </div>
  );
};

export default AgeError;