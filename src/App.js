import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// Components
import MainMenu from "./menu/MainMenu.js";
import PageWrapper from "./PageWrapper.js";
import { Row, Col } from 'react-bootstrap';
import DocsPage from './apidocs/DocsPage.js';

// Stylesheets
import './App.css'; 
import "./menu/MainMenu.css";

// Constants
import { pageMapper } from "./menu/menuPages.js";


// General layout for app
// - Menu on sidebar
// - Page on the right
// - Uses pageMapper to dynamically show menu
//   and match routes
export default function App(props) {
	if (!props.menuPages) return null;

	return (
		<Router>
			<Row className="m-3">
				<Col id="sidebar-wrapper">
					<MainMenu
						menuPages={props.menuPages}
						pageMapper={pageMapper}
						/>
				</Col>
				<Col className="col-10 mt-3">
					<div id="page-content-wrapper">
					<Routes>
						{props.menuPages !== "error" && props.menuPages.map(cardProps => {
							return (
								<Route
									key={`route-${cardProps.pageTitle}`}
									path={`/${cardProps.url}`}
									element={
									<PageWrapper pageTitle={cardProps.pageTitle}>
										{pageMapper[cardProps.url]}
									</PageWrapper>}
									/>
							)	
						})}
						<Route
							key='route-docs'
							path='/docs'
							element={<DocsPage />}
							/>
						{/* Add a 404 route here */}
					</Routes>
					</div>
				</Col>
			</Row>
		</Router>
	);
}

// const App = () => {
//   const [newEntry,setNewentry]=useState({
// 	builder:"",
// 	sku:"",
// 	qty:"",
// 	timestamp:""
//   });
//   const inputdata=(e)=>{
//   e.preventDefault();
//   const name=e.target.name;
//   const value=e.target.value;
//   setNewentry((previousData)=>{
// 	  return{
// 		...previousData,
// 		[name]:value
// 	  } 
//   })
//   }
  
//   return (
// 	  <div className = "App">
// 	  < header className = "App-header" >
// 		<img src={logo} className = "App-logo" alt="logo"/>
// 		<h1> BoilBoss Internal APP</h1>
	   
//    <div>
   
   
   
//    <a href="https://2nto10r5ua.execute-api.us-east-1.amazonaws.com/quickbooksAuthRedirect" target="_blank" rel="noreferrer">
// 		  <button>Click</button>
// 		</a>
// 	<form>
// 	  <fieldset>    
//  <p>Production Form</p>
// 		 <div>
// 		   <input type = "text"  placeholder = "Enter Name" value={newEntry.builder} name="builder" onChange={inputdata}/>
// 		  </div>
		
// 		<div>
// 			<input type = "text"  placeholder = "SKU" value={newEntry.sku} name="sku" onChange={inputdata} />
// 		 </div>
		  
// 		 <div>
// 			  <input type = "number"  placeholder = "QTY Built" value={newEntry.qty} name ="qty" onChange={inputdata}/>
// 		  </div>

// 		  <div>
// 			   <input type = "date"  placeholder = "Date Completed" value={newEntry.timestamp} name ="timestamp" onChange={inputdata}/>
// 		   </div>
	  
// 	  </fieldset>
// 			<button class name = "btn btn-dark" type="Submit Production Form">Submit</button>
// 	</form>
   
   
//    <h1>{newEntry.builder}</h1> 
//    <h1>{newEntry.sku}</h1> 
//    <h1>{newEntry.qty}</h1> 
//    <h1>{newEntry.timestamp}</h1> 

//   </div>
// 	  </header>
// 	</div>

//   );
//   } 
