import React from 'react';



function App() {

  const handleClick = (event :React.MouseEvent<HTMLButtonElement> ) =>{
    event.target
  }

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    e.target.value
  }

  return (
      <div className="App">
        <h1>type script</h1>

        <button onClick={handleClick}> Click </button> 

        <input type="text" onChange={handleChange}/>


      </div>
    );
  }

export default App;


{/* <input type="text" onChange={(e)=>{

}} /> */}