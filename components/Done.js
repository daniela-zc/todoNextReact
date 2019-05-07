import React, { Component } from "react";
import List from './List';

export default class Done extends Component {
    render() {
        let listItems = this.props.items;
        let list = [];

        // Get only items marked as Done
        for(var i = 0; i < listItems.length; i++) {
            if (listItems[i].status == 0) list[i] = listItems[i];
        }
        return (
            <React.Fragment>
                <h1>Done</h1>
                <List items={list} />
            </React.Fragment>
        );
    }
};