import React from "react";
import './App.css'; 
import MainMenu from "./components/MainMenu";
import pageMapper from "./pageMapper.js";
import PageWrapper from "./PageWrapper";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Row, Col } from 'react-bootstrap';
import "./styles/MainMenu.css";

export default function App(props) {
	if (!props.menuPages) return null;

	return (
		<Router>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
					integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
					crossOrigin="anonymous"
					/>
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
					</Routes>
					</div>
				</Col>
			</Row>
		</Router>
	);
}

// export default function App () {
//   return (
// 	<Router>
// 	  <div>
// 		<nav>
// 		  <ul>
// 			<li>
// 			  <Link to="/">Home</Link>
// 			</li>
// 			<li>
// 			  <Link to="/about">About</Link>
// 			</li>
// 			<li>
// 			  <Link to="/users">Users</Link>
// 			</li>
// 		  </ul>
// 		</nav>

// 		{/* A <Switch> looks through its children <Route>s and
// 			renders the first one that matches the current URL. */}
// 		<Switch>
// 		  <Route path="/about">
// 			<About />
// 		  </Route>
// 		  <Route path="/users">
// 			<Users />
// 		  </Route>
// 		  <Route path="/">
// 			<Home />
// 		  </Route>
// 		</Switch>
// 	  </div>
// 	</Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }


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

