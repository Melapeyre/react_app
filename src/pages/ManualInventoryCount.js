import React from 'react';
import InventoryInput from '../components/InventoryInput.js';

function manualInventoryCount(body) {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	
	var requestOptions = {
	  method: 'POST',
	  headers: myHeaders,
	  body: JSON.stringify(body),
	  redirect: 'follow'
	};
	
	fetch("https://2nto10r5ua.execute-api.us-east-1.amazonaws.com//finishedinventory", requestOptions)
	  .then(response => response.text())
	  .then(result => alert(result))
	  .catch(error => console.log('error', error));
}

export default function ManualInventoryCount() {
	return(
		<InventoryInput sendChanges={manualInventoryCount}/>
	);
}