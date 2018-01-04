import React from 'react';
import Button from './components/button';

let Root = React.createClass({
	getInitialState() {
		return {		
			count: 0
		}
	},
	counterHandler() {
		this.setState({
			count: this.state.count + 1
		});
	},
    render() {
        return (
            <div className="content">
                <div className="title">hello steven，welcome to the React ~ ~ ~</div>
                <Button></Button>
            </div>
        );
    }
});

export default Root;
