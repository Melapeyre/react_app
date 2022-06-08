import React from "react";
import logo from './logo.svg';
import './App.css'; 
function App() {
  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }
  return (
      <div className = "App">
      < header className = "App-header" >
        <img src={logo} className = "App-logo" alt="logo"/>
        <h1> Hello From A New World 2</h1>
        <form onSubmit={handleSubmit}> 
        <fieldset>
         <label>
           <p>Name</p>
           <input name="name" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}
export default App;
