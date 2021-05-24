import axios from 'axios';
import React, { Component } from 'react'

class LoanIssuerService extends Component {
    Login(email,password) {
        return axios.get(`http://localhost:8080/login/${email}/${password}`);
    }
    
}
export default new LoanIssuerService;

