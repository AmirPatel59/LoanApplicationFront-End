import React, { Component } from 'react'
import CustomerService from '../Services/CustomerService'
import LoanApplicationService from '../Services/LoanApplicationService'
import LoanIssuerService from '../Services/LoanIssuerService'
import Navbar from './Navbar'
import Profile from './Profile'

export default class CloseLoan extends Component {
    constructor(props) {
        super(props)

        this.state = {
          loan:{
            loanId:'',
            repayAmount: ''
          }  ,
          loanId:'',
          repayAmount:'' ,
          loanApplication:{
            loanId: 0,
            amount: 0,
            emi: 0,
            loanRepayPeriod: 0,
            monthlyIncome: 0,
            loanStatus: '',
            repayAmount: 0,
            loanTypeId: {
                loanTypeId: 0,
                loanName: '',
                rateOfInterest: 0
            }               
        }
    }
    }
    componentDidMount(){
        
        // this.setState({loanId:this.state.loanId});
        // this.setState({repayAmount:this.state.repayAmount});
   }
    loanIdHandler=(e)=>{
        this.setState({loanId:e.target.value})
    }
   
    repayAmountHandler=(e)=>{
        this.setState({repayAmount:e.target.value})
        
    }
    

    closeLoan=(e)=>{
        e.preventDefault()
        LoanIssuerService.viewLoan(this.state.loanId).then((res) => {
            console.log(res.data)
            
            this.setState({ loanApplication: res.data })
            if(this.state.loanApplication.loanStatus=="Approved")
            {

           
        let loan={
            
            loanId:this.state.loanId,
            repayAmount:this.state.repayAmount 
        }
        
        LoanApplicationService.closeLoan(loan.loanId,loan.repayAmount).then((response)=>{
            console.log(response.data);
            if(loan.loanId==response.data.loanId && loan.repayAmount==response.data.amount )
            {
            alert("loan closed")
            this.props.history.push(`loanApplication`)
            }
            else
            {
                alert("loan id or repay amount is incorrect")
            }
        })
    }
    else{
        alert("loan is not approved, can't be closed")
    }
    })}
    render() {
        return (
            <div className="limiter" style={{backgroundImage:`url(/images/bg-01.jpg)`,width:'100%',height:'38rem'}}>
                <div className="container-fluid pt-4 pb-5">
                    <div className="row mt-4">
                        <div className="col-sm-8">
                            <div className="card">
                                <div className="card-body">
                                    <Navbar></Navbar>

                                    <h3 className="text-center text-primary mt-3 mb-3"><b>CLOSE LOAN</b></h3>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="row">
                                                <div className="col-sm-6 text-right mb-3">
                                                    <label className="fw-bold text-danger">Loan Id :</label>
                                                </div>
                                                <div className="col-sm-6"><input type="text" className="form-control" onChange={this.loanIdHandler} style={{ width: "12rem", height: "1.9rem" }} />
                                                </div></div>
                                            <div className="row">
                                                <div className="col-sm-6 text-right">
                                                    <label className="fw-bold text-danger mb-3">Repay Amount :</label>
                                                </div>
                                                <div className="col-sm-6"><input type="text" className="form-control" onChange={this.repayAmountHandler} style={{ width: "12rem", height: "1.9rem" }} />
                                                </div></div>
                                           
                                            
                                                <div className="row mt-3 mb-4">
                                                <div className="col-sm-6 text-right">
                                                    <button className="btn btn-info" onClick={this.closeLoan}>
                                                       Close Loan
                                                    </button>
                                                </div>
                                                <div className="col-sm-6">
                                                <button className="btn btn-warning">
                                                        Reset
                                                    </button>
                                                </div></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <Profile></Profile>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
