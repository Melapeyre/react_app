import React,{useState} from "react";
import logo from './logo.svg';
import './App.css'; 
import axios from 'axios';

const App = () => {
  const [newEntry,setNewentry]=useState({
    builder:"",
    sku:"",
    qty:"",
    timestamp:""
  });
  const axios = require('axios').default;
  getData = axios.get('https://svc62y5jg2.execute-api.us-east-1.amazonaws.com/default/BoilBoss_APP')
  .then(response => {
    console.log(respnse);
    // handle success
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

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
       
   <div>
    <form onSubmit={'getData'}>
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
      </header>
    </div>

  );
  } 

  export default App;
