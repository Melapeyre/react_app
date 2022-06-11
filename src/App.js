import React from "react";
import logo from './logo.svg';
import './App.css'; 
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const sku=e.target.SKU.value;
    const Builder=e.target.Builder.value;
    const QTY=e.target.QTY.value;
    const timestamp=e.target.timestamp.value;
    const Counter=e.target.Counter.value;
    console.log(Builder);
    console.log(sku);
    console.log(QTY);
    console.log(timestamp);
    console.log(Counter);
  }
  return (
      <div className = "App">
      < header className = "App-header" >
        <img src={logo} className = "App-logo" alt="logo"/>
        <h1> Hello From A New World 2</h1>
//production form
        <form onSubmit={handleSubmit}> 
        <fieldset>
         <label>
           <p>Production Form</p>
           <input type = "text" name="Builder" placeholder = "Enter Name" />
           <input type = "text" name="SKU" placeholder = "SKU" />
           <input type = "number" name ="QTY" placeholder = "QTY Built"/>
           <input type = "date" name ="timestamp" placeholder = "Date Completed"/>
         </label> 
       </fieldset>
       <button type="Submit Production Form">Submit</button>
        </form>
//Inventory count form 

<form onSubmit={handleSubmit}> 
        <fieldset>
         <label>
           <p>Inventory Count</p>
           <input type = "text" name="Counter" placeholder = "Enter Name" />
           <input type = "text" name="SKU" placeholder = "SKU" />
           <input type = "number" name ="QTY" placeholder = "Current Inventory"/>
           <input type = "date" name ="timestamp" placeholder = "Date Counted"/>
         </label> 
       </fieldset>
       <button type="Submit Inventory Count Form">Submit</button>
        </form>
      </header>
    </div>
  );
}
export default App;
