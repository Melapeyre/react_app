import React from "react";

//mapping name and count from full inventory list
function mapperFunc (obj) {
    return <p>{obj.name}({obj.sku}):{obj.count}</p>
}

class CurrentInventory extends React.Component {
  constructor(props) {
	super(props);

	this.state = {
	  currentInventoryLevels: [],
	};
  }
//requesting data from lambda
  async componentDidMount() {
	var requestOptions = {
	  method: "GET",
	  redirect: "follow",
	};

	let response = await fetch(
	  "https://2nto10r5ua.execute-api.us-east-1.amazonaws.com/finishedinventory",
	  requestOptions
	);
	let data = await response.json();
	this.setState({
		currentInventoryLevels: data,
	});
  }
//displaying current inventory grouped by product type
render() {
	//if no data loads - return loading 
	  if (this.state.currentInventoryLevels.length === 0) return <p>Loading...</p>;

	//filter data by product type
	let boilBossElements = this.state.currentInventoryLevels.filter(
	  (x) => x.productType === "BoilBoss"
	);
	let paddleElements = this.state.currentInventoryLevels.filter(
	  (x) => x.productType === "Paddle"
	);
	
	//display data for both product types
	return (
	  <div>
		<div>
		  <h1>BoilBoss</h1>
		  {boilBossElements.map(mapperFunc)}
		</div>

		<div>
		  <h1>Thermo-Paddle</h1>
		  {paddleElements.map(mapperFunc)}
		</div>
	  </div>
	);
  }
}

export default CurrentInventory;