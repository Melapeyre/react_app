import React from "react";
import logo from './logo.svg';
import './App.css'; 
function App() {
  return (
      <div className = "App">
      < header className = "App-header" >
        <img src={logo} className = "App-logo" alt="logo"/>
        <h1> Hello From A New World 2</h1>
        <form> 
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
