import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    fetchItems,
    fetchCurrencyM0,
    fetchCurrencyM1,
    fetchCurrencyM2,
    fetchCurrencyM3,
    fetchCurrencyM4,
    fetchCurrencyM5,
    fetchCurrencyM6
} from '../actions';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            term: '',
            searchOptionSelected: false
        };

        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value,
            searchOptionSelected: false
        })
    }

    getTypeaheadOptions() {
        // chooseItems function filters a list and returns items that contain searchText
        const chooseItems = (searchText, list) => (
            list.filter(item => {
                return item.abbreviation.toLowerCase().includes(searchText.toLowerCase()) || item.currency.toLowerCase().includes(searchText.toLowerCase())
            })
        );
        
        // get the value of the input and assign in to searchText var
        const searchInputText = this.state.term.trim();
        // if searchtext is not empty
        if (searchInputText) {
            // use choose items function to locate the typeahead options
            const searchOptions = chooseItems(searchInputText, this.props.currency.items);
            // if typeahead option not selected render typeahead options to the screen
            if (!this.state.searchOptionSelected) {
                return searchOptions.map(( {currency, abbreviation} ) => (
                    <li 
                        onClick={() => this.typeaheadOptionSelected(abbreviation) }
                        className="typeaheadOptionsListItem"
                        key={`${abbreviation}search`}
                    >
                        {`${abbreviation} (${currency})`}
                    </li>)
                );
            }
        }
    }
    typeaheadOptionSelected(option) {
        this.setState({
            searchOptionSelected: true
        });

        this.refs.searchProductInput.value = option;

        return this.onFormSubmit();
    }

    onFormSubmit(event) {
        if (event) {
            event.preventDefault();
        }

        let val = this.refs.searchProductInput.value.trim().toUpperCase();

        this.setState({
            term: '',
            searchOptionSelected: false
        });
        
        const validator = this.props.currency.items.find(({abbreviation, currency}) => abbreviation === val || currency.toUpperCase() === val);
        
        if (!validator) {
            val = 'USD'
        } else {
            val = validator.abbreviation
        }

        return this.props.getData(val);
    }

    render() {
        return <form className="searchProductForm" onSubmit={this.onFormSubmit.bind(this)} >
            <span className="searchProductInputAndButtonWrapper">
                <input
                    placeholder="Search currency"
                    className="searchProductInput"
                    ref="searchProductInput"
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)}
                />
                <button type="submit" className="searchProductButton">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </span>
            <ul className="typeaheadOptionsList">
                {this.getTypeaheadOptions()}
            </ul>
        </form>;
    }
}

function mapStateToProps({ currency }) {
    return { currency };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchItems, fetchCurrencyM0, fetchCurrencyM1, fetchCurrencyM2, fetchCurrencyM3, fetchCurrencyM4, fetchCurrencyM5, fetchCurrencyM6 }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
