import { button } from 'aws-amplify';
import React from 'react';

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify([
  {
    "sku": "sp",
    "qty": 10,
    "producer": "Alex"
  }
]);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

let response = await fetch(
	"https://2nto10r5ua.execute-api.us-east-1.amazonaws.com/default/InventoryProduced", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

export default function Production() {
	return(
<div>
	<div> 
	<h1>BoilBoss Production</h1>
	<button>Standard Black</button>
	<button>Standard Red</button>
	<button>Standard Purple and Gold</button>
	</div>
	
	<div>
		<h1>Paddle Production</h1>
	</div>
	<button>Thermo Paddle</button>
 </div>
	)
}