import React, { Component } from "react";
import List from './List';

export default class Done extends Component {
    render() {
        let list = this.props.items.filter(function(item){
            return item.status == 0;
        });
        return (
            <React.Fragment>
                <h1>Done</h1>
                <List
                    updateItem={null}
                    deleteItem={null}
                    items={ list } />
            </React.Fragment>
        );
    }
};