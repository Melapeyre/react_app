import React,{useState} from "react";
import logo from './logo.svg';
import './App.css'; 
function App() {
  const [builder,setBuilder]=useState("");
  const [sku,setSKU]=useState("");
  const [qty,setQTY]=useState("");
  const [timestamp,settimestamp]=useState("");
  const [newEntry, setNewentry]=useState([]);

  
  const myName=(e)=>{
    setBuilder(e.target.value);
  }
  const submitData=()=>{
    const newData={builder:builder,sku:sku,qty:qty,timestamp:timestamp}
    setNewentry([newData]);
  }

  return (
      <div className = "App">
      < header className = "App-header" >
        <img src={logo} className = "App-logo" alt="logo"/>
        <h1> BoilBoss Internal APP</h1>
       
   <div>
    <form onSubmit={submitData}>
      <fieldset>
         
 <p>Production Form</p>
         <div>
           <input type = "text" name="Builder" placeholder = "Enter Name" value={builder} onChange={(e)=>{setBuilder(e.target.value)}}/>
          </div>
        
        <div>
            <input type = "text" name="SKU" placeholder = "SKU" value={sku} onChange={(e)=>{setSKU(e.target.value)}} />
         </div>
          
         <div>
              <input type = "number" name ="QTY" placeholder = "QTY Built" value={qty} onChange={(e)=>{setQTY(e.target.value)}}/>
          </div>

          <div>
               <input type = "date" name ="timestamp" placeholder = "Date Completed" value={timestamp} onChange={(e)=>{settimestamp(e.target.value)}}/>
           </div>
      
      </fieldset>
            <button class name = "btn btn-dark" type="Submit Production Form">Submit</button>
    </form>
  </div>

<form> 
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
