import React, { Component } from 'react';

export default class RecordForm extends Component {
    constructor(props){
        super(props);
        this.state={
            date:"",
            title:"",
            amount:""
        };
        this.handle=this.handle.bind(this);
        this.valid=this.valid.bind(this);
    }

    handle(event){
        let name=event.target.name;
        let value=event.target.value;
        this.setState({
        [name]:value
        });
    }

    valid(){
        return (this.state.date&&this.state.title&&this.state.amount);
    }

    render() {
        return (
            <form action="" className="form-inline">
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Date" name="date"
                           value={this.state.date}
                           onChange={this.handle}
                    />
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Title" name="title"
                           value={this.state.title}
                           onChange={this.handle}
                    />
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Amount" name="amount"
                           value={this.state.amount}
                           onChange={this.handle}
                    />
                </div>
                <button className="btn btn-primary" type="submit" disabled={!this.valid()}>Create Record</button>
            </form>
        );
    }
}
