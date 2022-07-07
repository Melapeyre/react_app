import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const menuPages = [
	{
		pageTitle: 'Home',
		url: 'home'
	},
	{
		pageTitle: 'Production',
		url: 'production'
	}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App menuPages={menuPages}/>
	</React.StrictMode>
);