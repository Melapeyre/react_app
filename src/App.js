import React from "react";
import logo from './logo.svg';
import './App.css'; 
function App() {
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData (event.target);
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
           <p>SKU</p>
           <input name="SKU" />
         </label>
       </fieldset>
       <button type="Submit Sku Data">Submit</button>
        </form>
      </header>
    </div>
  );
      function getFormData (){
        console.log(data)
  }
}
export default App;
