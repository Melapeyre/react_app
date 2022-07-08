import Home from '../pages/Home.js';
import Production from '../pages/Production.js';

// Maps urls to page titles
export const menuPages = [
	{
		pageTitle: 'Home',
		url: 'home'
	},
	{
		pageTitle: 'Production',
		url: 'production'
	}
]

// Maps urls to Page components
export const pageMapper = {
	production: <Production />,
	home: <Home />
};
