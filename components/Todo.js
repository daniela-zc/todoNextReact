import React, { Component } from "react";
import InputText from './InputText';
import List from './List';
import Done from "../components/Done";

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            listItems: []
        };

        this.updateItem = this.updateItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputRef = React.createRef();
    }

    updateItem(item, itemIndex, text) {
        let items = this.state.listItems;
        item.text = text;
        items[itemIndex] = item;
        this.setState({ listItems: items });
    }

    deleteItem(itemIndex) {
        let items = this.state.listItems;
        items[itemIndex].status = 0;
        this.setState({ listItems: items });
    }

    updateInputValue(event) {
        this.setState({ inputValue: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let items = this.state.listItems;
        items.push({
            text: this.inputRef.current.value,
            status: 1
        });
        this.setState({
            listItems: items,
            inputValue: ''
        });
    }

    render() {
        let list = this.state.listItems.filter(function(item){
            return item.status;
        });
        return (
            <React.Fragment>
                <InputText
                        onSubmit={this.handleSubmit}
                        inputRef={this.inputRef}
                        inputValue={this.state.inputValue}
                        onInputChange={this.updateInputValue}
                        buttonText=' + ' />

                <h1>Todo</h1>
                <List
                    updateItem={this.updateItem}
                    deleteItem={this.deleteItem}
                    items={list} />
                <Done items={this.state.listItems} />
            </React.Fragment>
        );
    }
};