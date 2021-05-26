import axios from 'axios';
import React, { Component } from 'react'
class LoanApplicationService extends Component {
applyLoan(loan){
    return axios.post(`http://localhost:8080/loanApplication/applyLoan`,loan)
}
closeLoan(loanId,repayAmount){
    return axios.put(`http://localhost:8080/loanApplication/closeLoan/${loanId}/${repayAmount}`)
}
viewLoan(loanId)
{
    return axios.post(`http://localhost:8080/loanApplication/viewLoanApplicationByLoanId/${loanId}`)
}
}
export default new LoanApplicationService; 
