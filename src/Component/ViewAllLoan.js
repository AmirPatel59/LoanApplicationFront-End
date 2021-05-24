import React, { Component } from 'react'

export default class ViewAllLoan extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                <div className="container-fluid mt-4 " >
                    <div className="shadow-lg p-3 mb-5 bg-white rounded">   
                        <div className="card">
                            <div className="card-body">
                                <p class="fst-normal text-center">Customer Loan Applications</p>
                            </div>
                        </div>       
                    </div>
                </div>
            </div>
        )
    }
}

