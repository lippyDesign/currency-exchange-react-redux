import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Sparklines, SparklinesLine } from 'react-sparklines';

import { fetchCurrencyM0, fetchCurrencyM1, fetchCurrencyM2, fetchCurrencyM3, fetchCurrencyM4, fetchCurrencyM5, fetchCurrencyM6 } from '../actions';

import axios from 'axios';
class CurrencyList extends Component {

    componentDidMount() {
        this.getData('USD');
    }

    getData(currency) {

        const m0 = moment().subtract(0, 'days').format().substr(0, 10);
        const m1 = moment().subtract(1, 'days').format().substr(0, 10);
        const m2 = moment().subtract(2, 'days').format().substr(0, 10);
        const m3 = moment().subtract(3, 'days').format().substr(0, 10);
        const m4 = moment().subtract(4, 'days').format().substr(0, 10);
        const m5 = moment().subtract(5, 'days').format().substr(0, 10);
        const m6 = moment().subtract(6, 'days').format().substr(0, 10);
        
        this.props.fetchCurrencyM0(currency, m0);
        this.props.fetchCurrencyM1(currency, m1);
        this.props.fetchCurrencyM2(currency, m2);
        this.props.fetchCurrencyM3(currency, m3);
        this.props.fetchCurrencyM4(currency, m4);
        this.props.fetchCurrencyM5(currency, m5);
        this.props.fetchCurrencyM6(currency, m6);
    }

    renderCurrencyList() {
        const { m0, m1, m2, m3, m4, m5, m6 } = this.props.currency;

        // if data is not ready yet, show spinner
        if (!m6.base) {
            return <div className="loadingWrapper">
            <div>
                <i className="fa fa-circle-o-notch fa-spin fa-5x"></i>
                <p>Loading...</p>
            </div>
            </div>
        }
        // of data is ready show data
        return <main className="main">
            <h1>Today 1 {m0.base} is wroth:</h1>
            <p>Need rates in relationship to another currency?</p>
            <p className="pp">Select the desired currency directly from the table bellow</p>
            <table className="table table-striped table-inverse currencyTable">
                <thead>
                    <tr className="thead-inverse">
                        <th className="tableHeaderItem">Currency</th>
                        <th className="tableHeaderItem"><span className="foldable">Today's</span> Rate</th>
                        <th className="tableHeaderItem">Last 7 Days <span className="foldable">vs {m0.base}</span></th>
                    </tr>
                </thead>
                <tbody>
                    {this.listMaker()}
                </tbody>
            </table>
            
            <em>Last updated on {moment(m0.date).format("ll")}. Be mindful of the fact that the banks do not work on the weekends and hollidays, therefore this table doesn't get updated during that time</em>
        </main>;
    }

    listMaker() {

        const { m0, m1, m2, m3, m4, m5, m6 } = this.props.currency;

        let generalArr = [];

        [m0.rates, m1.rates, m2.rates, m3.rates, m4.rates, m5.rates, m6.rates].forEach(i => {
            for (let currency in i) {
                let z = generalArr.find(item => item.currency === currency);
                if (!z) {
                    generalArr.push({currency, rates: [ i[currency] ]})
                } else {
                    z.rates = [...z.rates, i[currency]]
                }
            }
        });

        return generalArr.map( ({currency, rates}) => {
            return <tr key={currency} onClick={() => this.getData(currency)}>
                <td>{currency}</td>
                <td>{rates[0].toFixed(2)}</td>
                <td>
                    <Sparklines data={rates.reverse()} width={70} height={18}>
                        <SparklinesLine color="white" />
                    </Sparklines>
                </td>
            </tr>
        });
    }

    render() {
        
        return (
            <div>
                {this.renderCurrencyList()}
            </div>
        );
    }
}

function mapStateToProps({ currency }) {
    return { currency };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCurrencyM0, fetchCurrencyM1, fetchCurrencyM2, fetchCurrencyM3, fetchCurrencyM4, fetchCurrencyM5, fetchCurrencyM6 }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList);
