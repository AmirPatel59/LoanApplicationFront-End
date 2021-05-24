import axios from 'axios';
import React, { Component } from 'react'

class LoanIssuerService extends Component {
    Login(email,password) {
        return axios.get(`http://localhost:8080/login/${email}/${password}`);
    }
<<<<<<< HEAD
    
=======
    viewAllLoans(){
        return axios.get(`http://localhost:8080/viewAllLoanApplications`);
    }
    viewLoan(loanId){
        return axios.get(`http://localhost:8080/loanApplication/viewLoanApplicationByLoanId/${loanId}`);
    }
    setStatus(loanId,status){
        return axios.put(`http://localhost:8080/setStatus/${loanId}/${status}`);
    }
>>>>>>> 89bc5a2ae6a3cfbd6c3a331100ee1df44196a08f
}
export default new LoanIssuerService;

