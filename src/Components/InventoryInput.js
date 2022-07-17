import React from "react";

class InventoryInput extends React.Component {
	constructor() {
		super();
		this.state = {
			skuList: []
		};

		this.updateCounts = this.updateCounts.bind(this);
		this.submitChanges = this.submitChanges.bind(this);
	}

	async componentDidMount() {
		let resp = await fetch("https://2nto10r5ua.execute-api.us-east-1.amazonaws.com/skus");
		resp = await resp.json();
		resp = resp.map(x => {
			return {
				...x,
				qty: 0
			}
		});
		this.setState({ skuList: resp });
	}

	updateCounts(skuObj, event){
		let sku = skuObj.sku;
		let newQty = event.target.value;

		let newSkuList = [...this.state.skuList];
		newSkuList = newSkuList.map(x => {
			if (x.sku === sku) x.qty = newQty ? parseInt(newQty) : newQty;
			return x;
		});
		
		this.setState({ skuList: newSkuList });
	}

	submitChanges() {
		let skusToAdd = this.state.skuList.filter(x => x.qty !== 0 && x.qty !== '');
		skusToAdd = skusToAdd.map(x => {
			return {
				qty: x.qty,
				sku: x.sku,
				producer: 'Alex'
			};
		});

		this.props.sendChanges(skusToAdd);
	}

	render() {
		return (
			<div style={{width: '100%'}}>
				<table>
					<thead><tr>
						<th>Product</th>
						<th>QTY</th>
					</tr></thead>
					<tbody>
						{this.state.skuList.map(x => {
							return (
								<tr key={x.sku}>
									<td style={{width: '300px'}}>{x.name}</td>
									<td>
										<input type="number"
											onChange={this.updateCounts.bind(null, x)}
											value={x.qty}>
										</input>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<button onClick={this.submitChanges}>Submit</button>
			</div>
		);
	}
}

export default InventoryInput;