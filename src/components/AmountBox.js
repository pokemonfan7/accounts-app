import React,{ Component } from 'react';

export default class AmountBox extends Component{
    render(){
        return (
            <div className="col-md-3">
                <div className="card">
                    <div className={`card-header bg-${this.props.type} text-white`}>
                        {this.props.title}
                    </div>
                    <div className="card-body">
                        ￥{this.props.count}
                    </div>
                </div>
            </div>
        );
    }
}