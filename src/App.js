import React,{useState} from "react";
import logo from './logo.svg';
import './App.css'; 
function App() {
 
  const [newEntry, setNewentry]= useState({
    builder:"",
    sku:"",
    qty:"",
    timestamp:""

  });

  const inputdata=(e)=>{
  e.preventDefault();
  const name=e.target.builder;
  const value=e.target.value;
  setNewentry((previousData)=>{
    //console.log(previousData)
    if(name=='builder'){
      return{
        builder:value,
        sku:previousData.sku,
        qty:previousData.qty,
        timestamp:previousData.timestamp
      }
    }else if(name == "sku"){
      return{
        builder:previousData.builder,
        sku:value,
        qty:previousData.qty,
        timestamp:previousData.timestamp
      }
    } else if (name == "qty"){
      return{
        builder:previousData.builder,
        sku:previousData.sku,
        qty:value,
        timestamp:previousData.timestamp
      }
    } else if (name =="timestamp"){
      return{
        builder:previousData.builder,
        sku:previousData.sku,
        qty:previousData.qty,
        timestamp:value
      }
    }
  })
  }
  
  return (
      <div className = "App">
      < header className = "App-header" >
        <img src={logo} className = "App-logo" alt="logo"/>
        <h1> BoilBoss Internal APP</h1>
       
   <div>
    <form>
      <fieldset>    
 <p>Production Form</p>
         <div>
           <input type = "text" name="builder" placeholder = "Enter Name" value={newEntry.builder} onChange={inputdata}/>
          </div>
        
        <div>
            <input type = "text" name="sku" placeholder = "SKU" value={newEntry.sku} onChange={inputdata} />
         </div>
          
         <div>
              <input type = "number" name ="qty" placeholder = "QTY Built" value={newEntry.qty} onChange={inputdata}/>
          </div>

          <div>
               <input type = "date" name ="timestamp" placeholder = "Date Completed" value={newEntry.timestamp} onChange={inputdata}/>
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
