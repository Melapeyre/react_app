import React from 'react';

class CurrentInventory extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentInventoryLevels: []
        }
    }

    async componentDidMount(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        fetch("https://2nto10r5ua.execute-api.us-east-1.amazonaws.com/getCurrentFinishedInventory", requestOptions)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    currentInventoryLevels: data
                })
            })
    }

    render() {
        return <p>{JSON.stringify(this.state.currentInventoryLevels)}</p>
    }
}

export default CurrentInventory;