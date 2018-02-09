import React, { Component } from 'react';

export default class RecordForm extends Component {
    render() {
        return (
            <form action="" className="form-inline">
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Date" name="date" />
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Title" name="title" />
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Amount" name="amount" />
                </div>
                <button className="btn btn-primary" type="submit">Create Record</button>
            </form>
        );
    }
}
