import React from "react";
import logo from './logo.svg';
import './App.css'; 
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const sku=e.target.SKU.value;
    console.log(sku);
  }
  return (
      <div className = "App">
      < header className = "App-header" >
        <img src={logo} className = "App-logo" alt="logo"/>
        <h1> Hello From A New World 2</h1>
        <form onSubmit={handleSubmit}> 
        <fieldset>
         <label>
           <p>SKU</p>
           <input type = "text" name="SKU" placeholder = "Enter SKU" />
         </label> 
       </fieldset>
       <button type="Submit Sku Data">Submit</button>
        </form>
      </header>
    </div>
  );
}
export default App;
