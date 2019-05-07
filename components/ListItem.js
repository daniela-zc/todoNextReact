import React, { Component } from 'react';
import InputText from './InputText';
import css from '../static/css/index.css';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditMode: false,
            inputValue: '',
            status: 0
        };
        this.editItem = this.editItem.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.inputRef = React.createRef();
    }

    editItem(text) {
        this.setState({
            isEditMode: true,
            inputValue: text
        }, () => {
            this.inputRef.current.focus();
        });
    }

    updateInputValue(e){
        this.setState({ inputValue: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateItem(this.props.item, this.props.itemNumber, this.inputRef.current.value);
        this.setState({
            isEditMode: false,
            inputValue: ''
        });
    }

    render() {
        const {
            item,
            itemNumber
        } = this.props;

        return (
            <div className={css.listItem} key={itemNumber.toString()}>
                <h4>{itemNumber + 1}.</h4>
                {this.state.isEditMode ? 
                    <InputText
                        onSubmit={this.handleSubmit}
                        inputRef={this.inputRef}
                        inputValue={this.state.inputValue}
                        onInputChange={this.updateInputValue}
                        buttonText='update' />
                :
                (this.props.deleteItem !== null) && (this.props.updateItem !== null) ?
                    <React.Fragment>
                        <h3 onClick={() => this.editItem(item.text)}>{item.text}</h3>
                        <button className={css.doneButton} onClick={() => this.props.deleteItem(itemNumber)}>done</button>
                    </React.Fragment>
                :
                <h3 >{item.text}</h3>
                }
            </div>
        );
    }    
}