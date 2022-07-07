import React from 'react';
import { Card, Row } from 'react-bootstrap';

export default function PageWrapper(props) {
	return (
		<Card style={{width: '100%'}}>
		<Card.Header
			style={{fontSize: 30, fontWeight: '500', color: '#4E73DF', textAlign: 'left'}}>
				{props.pageTitle}
		</Card.Header>
		<Card.Body>
			<Row xs={2} md={4} className="g-4">
				{props.children}
			</Row>			
		</Card.Body>
		</Card>	
	)
}
