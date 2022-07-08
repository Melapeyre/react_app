import React from 'react';
import MenuCard from './MenuCard';
import { Container, Row, Nav } from "react-bootstrap";
import "./../styles/MainMenu.css";

/**
 * Functional component that displays the menu
 * for the current user
 * @returns {React.Component}
 */
export default function MainMenu(props) {
	return ( 
		<Nav className={`col-md-2 d-none d-md-block nav sidebar main-nav`}>
			<Container fluid>
				<Row>
					{props.menuPages.map(cardProps => 
						<MenuCard
							keyItem={`menuitem-${cardProps.pageTitle}`}
							key={`menuitem-${cardProps.pageTitle}`}
							{...cardProps}
							/>)}
				</Row>
			</Container>
		</Nav>
	)
}
