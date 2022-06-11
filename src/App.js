import React from "react";
import logo from './logo.svg';
import './App.css'; 
function App() {


  return (
      <div className = "App">
      < header className = "App-header" >
        <img src={logo} className = "App-logo" alt="logo"/>
        <h1> BoilBoss Internal APP</h1>
       
   <div>
    <form onSubmit={handleSubmit}> 
      <fieldset>
         
 <p>Production Form</p>
         <div>
           <input type = "text" name="Builder" placeholder = "Enter Name" />
          </div>
        
        <div>
            <input type = "text" name="SKU" placeholder = "SKU" />
         </div>
          
         <div>
              <input type = "number" name ="QTY" placeholder = "QTY Built"/>
          </div>

          <div>
               <input type = "date" name ="timestamp" placeholder = "Date Completed"/>
           </div>
      
      </fieldset>
            <button class name = "btn btn-dark" type="Submit Production Form">Submit</button>
    </form>
  </div>

<form onSubmit={handleSubmit}> 
        <fieldset>
  <p>Inventory Count</p>
       <div>
           <input type = "text" name="Counter" placeholder = "Enter Name" />
       </div>
           
        <div> 
           <input type = "text" name="SKU" placeholder = "SKU" />
           </div> 
        <div>
           <input type = "number" name ="QTY" placeholder = "Current Inventory"/>
         </div>

         <div>
           <input type = "date" name ="timestamp" placeholder = "Date Counted"/>
           </div> 
       </fieldset>
             <button class name = "btn btn-dark" type="Submit Inventory Count Form">Submit</button>
        </form>
      </header>
    </div>
  );
 }
export default App;
