const EncouragementButton = () => {
    const handleClick = () => {
      alert('You got this. Don’t Quit Now!');
    }
  
    return (
      <button onClick={handleClick}>Click Me!</button>
    );
  }
  
  export default EncouragementButton;
  