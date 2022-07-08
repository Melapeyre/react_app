import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { menuPages } from './menu/menuPages.js';

// Render app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App menuPages={menuPages}/>
	</React.StrictMode>
);