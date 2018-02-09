import React, { Component } from 'react';
import Record from './Record';
// import { getJSON } from 'jquery';
import axios from 'axios';
import RecordForm from './RecordForm';

export default class Records extends Component {
    constructor(props){
        super(props);
        this.state={
            error:null,
            isLoaded:false,
            records:[]
        };
        this.addRecord=this.addRecord.bind(this);
        this.updateRecord=this.updateRecord.bind(this);
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

    addRecord(record){
        this.setState({
            error:null,
            isLoaded:true,
            records:[
                ...this.state.records,
                record
            ]
        })
    }

    updateRecord(record,data){
        const recordIndex=this.state.records.indexOf(record);
         const newRecords=this.state.records.map((item, index) => {
                if (index !== recordIndex) {
                    return item;
                }
                return {
                    ...item,
                    ...data
                };
            }
        );
         // console.log(newRecords);
        this.setState({
            records:newRecords
        })
    }

  render() {
        const{error,isLoaded,records}=this.state;                //const不用=
      let recordsComponent;
        if(error){
            recordsComponent= (<h1>Error:{error.message}</h1>)   ;      //error.responseText
        }else if(!isLoaded){
            recordsComponent= (<h1>Loading...</h1>);
        }else{
            recordsComponent=(


                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {records.map((record,i)=><Record key={record.id} recordList={record} handleEditRecord={this.updateRecord} />)}
                        </tbody>
                    </table>

            );
        }
        return(
            <div>
                <h2>Records</h2>
                <RecordForm handleNewRecord={this.addRecord} />
                {recordsComponent}
            </div>
        );
  }
}


