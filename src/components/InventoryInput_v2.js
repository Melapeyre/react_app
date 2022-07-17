import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import './InventoryInput.css';

// const productTypes = ['BoilBoss', 'Paddle'];

export default function InventoryInput(props) {
    const [productTypes, setProductTypes] = useState([]);
    const [selectedProductType, selectProductType] = useState('');

    useEffect(() => {
        (async () => {
            let resp = await fetch("https://2nto10r5ua.execute-api.us-east-1.amazonaws.com/skus");
            resp = await resp.json();
            let uniqueProdTypes = new Set(resp.map(x => x.product_type));
            setProductTypes(Array.from(uniqueProdTypes));
        })()
    }, []);

    let subProductRender = null;


    return (
        <div>
            <div>
                <p>Product Type</p>
                <div>
                    {productTypes.map(x => {
                        return <Button
                                    key={x}
                                    variant={selectedProductType === x ? 'primary' : 'outline-primary'}
                                    onClick={selectProductType.bind(null,x)}>{x}</Button>
                    })}
                </div>
            </div>
            {subProductRender}
            <div>
                <p>Cart</p>
                
            </div>
        </div>
    )
}
