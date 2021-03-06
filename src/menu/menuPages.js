import Home from '../pages/Home.js';
import Production from '../pages/Production.js';
import CurrentInventory from '../pages/CurrentInventory.js';
import ManualInventoryCount from '../pages/ManualInventoryCount.js';

// Maps urls to page titles
export const menuPages = [
	{
		pageTitle: 'Home',
		url: 'home'
	},
	{
		pageTitle: 'Production',
		url: 'production'
	},
	{
		pageTitle: 'Manual Inventory Count',
		url: 'manualinventorycount'
	},
	{
		pageTitle:'Current Inventory',
		url:'currentinventory'
	}
];

// Maps urls to Page components
export const pageMapper = {
	production: <Production />,
	home: <Home />,
	currentinventory: <CurrentInventory/>,
	manualinventorycount: <ManualInventoryCount />
};
