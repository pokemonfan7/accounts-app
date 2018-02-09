import React, { Component } from 'react';
import Record from './Record';
// import { getJSON } from 'jquery';
import axios from 'axios';

export default class Records extends Component {
    constructor(props){
        super(props);
        this.state={
            error:null,
            isLoaded:false,
            records:[]
        };
    }
    componentDidMount(){
    //     getJSON("https://5a7bfd3b4c1e2d00124a5d8e.mockapi.io/api/v1/records").then(
    //         response=>this.setState({
    //             records:response,
    //             isLoaded:true
    //         }),
    //             error=>this.setState({
    //                 isLoaded:true,
    //                 error
    //             })
    // )
        axios.get("https://5a7bfd3b4c1e2d00124a5d8e.mockapi.io/api/v1/records").then(
            response=>this.setState({
                records:response.data,
                isLoaded:true
            }),
        ).catch(
            error=>this.setState({
                isLoaded:true,
                error
            })
        )

    }
  render() {
        const{error,isLoaded,records}=this.state;                //const不用=
        if(error){
            return <h1>Error:{error.message}</h1>         //error.responseText
        }else if(!isLoaded){
            return <h1>Loading...</h1>
        }else{
            return (
                <div>
                    <h2>Records</h2>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        {records.map((record,i)=><Record key={record.id} {...record} />)}
                        </tbody>
                    </table>
                </div>
            );
        }
  }
}


