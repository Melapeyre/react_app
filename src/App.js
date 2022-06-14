import React,{useState} from "react";
import logo from './logo.svg';
import './App.css'; 
import axios from 'axios';
import './form.css';

const App = () => {
  const [newEntry,setNewentry]=useState({
    builder:"",
    sku:"",
    qty:"",
    timestamp:"",

  });
 
const api = axios.create({
  baseURL:'https://2nto10r5ua.execute-api.us-east-1.amazonaws.com/default/BoilBoss_App'

})

  constructor() ;{
    super();
    api.get('/').then(res=>{
      console.log(res.data)
    })
  }


  const inputdata=(e)=>{
  e.preventDefault();
  const name=e.target.name;
  const value=e.target.value;
  setNewentry((previousData)=>{
      return{
        ...previousData,
        [name]:value
      } 
  })
  }
  
  return (
      <div className = "App">
      < header className = "App-header" >
        <img src={logo} className = "App-logo" alt="logo"/>
        <h1> BoilBoss Internal APP</h1>
       
   <div className="form-box1">
    <form onSubmit= {'sendData'}>
      <fieldset>    
 <p>Production Form</p>
         <div>
           <input type = "text"  placeholder = "Enter Name" value={newEntry.builder} name="builder" onChange={inputdata}/>
          </div>
        
        <div>
            <input type = "text"  placeholder = "SKU" value={newEntry.sku} name="sku" onChange={inputdata} />
         </div>
          
         <div>
              <input type = "number"  placeholder = "QTY Built" value={newEntry.qty} name ="qty" onChange={inputdata}/>
          </div>

          <div>
               <input type = "date"  placeholder = "Date Completed" value={newEntry.timestamp} name ="timestamp" onChange={inputdata}/>
           </div>
      
      </fieldset>
            <button class name = "btn btn-dark" type="Submit Production Form">Submit</button>
    </form>

   
   
   <h1>{newEntry.builder}</h1> 
   <h1>{newEntry.sku}</h1> 
   <h1>{newEntry.qty}</h1> 
   <h1>{newEntry.timestamp}</h1> 

  </div>

  <div>
    <form>
      <fieldset>    
 <p>Inventory Count</p>
         <div>
           <input type = "text"  placeholder = "Enter Name" value={newEntry.builder} name="builder" onChange={inputdata}/>
          </div>
        
        <div>
            <input type = "text"  placeholder = "SKU" value={newEntry.sku} name="sku" onChange={inputdata} />
         </div>
          
         <div>
              <input type = "number"  placeholder = "QTY Built" value={newEntry.qty} name ="qty" onChange={inputdata}/>
          </div>

          <div>
               <input type = "date"  placeholder = "Date Completed" value={newEntry.timestamp} name ="timestamp" onChange={inputdata}/>
           </div>
      
      </fieldset>
            <button class name = "btn btn-dark" type="Submit Production Form">Submit</button>
    </form>

   
   
   <h1>{newEntry.builder}</h1> 
   <h1>{newEntry.sku}</h1> 
   <h1>{newEntry.qty}</h1> 
   <h1>{newEntry.timestamp}</h1> 

  </div>
      </header>
    </div>

  );
  } 

  export default App;
