import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Record extends Component {
    render() {
        return (
                <tr>
                    <td>{this.props.date}</td>
                    <td>{this.props.title}</td>
                    <td>{this.props.amount}</td>
                </tr>
        );
    }
}
Record.propTypes={
    id:propTypes.number,
    date:propTypes.string,
    title:propTypes.string,
    amount:propTypes.string
};