import React, { Component } from 'react';
import axios from 'axios';

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
        this.handleSubmit=this.handleSubmit.bind(this);
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

    handleSubmit(event){
        const data={date:this.state.date,title:this.state.title,amount:Number.parseFloat(this.state.amount)};
        event.preventDefault();
        axios.post("https://5a7bfd3b4c1e2d00124a5d8e.mockapi.io/api/v1/records",
            data).then(
            response=>this.props.handleNewRecord(response.data),
            this.setState({
                date:"",
                title:"",
                amount:""
            }),
        ).catch(
            error=>console.log(error)
        )
    }


    render() {
        return (
            <form action="" className="form-inline mb-3" onSubmit={this.handleSubmit}>
                <div className="form-group mr-1">
                    <input className="form-control" type="text" placeholder="Date" name="date"
                           value={this.state.date}
                           onChange={this.handle}
                    />
                </div>
                <div className="form-group mr-1">
                    <input className="form-control" type="text" placeholder="Title" name="title"
                           value={this.state.title}
                           onChange={this.handle}
                    />
                </div>
                <div className="form-group mr-1">
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
