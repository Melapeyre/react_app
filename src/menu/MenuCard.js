import React from 'react';
import { Link } from 'react-router-dom';

// Style constants
const linkStyle = {
	textDecoration: 'none',
	paddingLeft: 10,
	display: 'flex',
	flexDirection: 'row',
	alignCotent: 'center',
	justifyContent: 'start',

}
const rowStyle = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignContent:'center',
	alignItems: 'center'

}

// This component shows one item in the navigation
// menu
function MenuCard(props) {	
	if (props.pageTitle) {
		return (
			<Link eventkey={props.keyItem} style={linkStyle} to={`${props.url}`} >
				<div className="rowTitle" style={rowStyle}>
					<p className="sidebar-heading">{props.pageTitle}</p>
				</div>
			</Link>
	);
		}
	else {
		return null;
	}
}

export default MenuCard;